const ICON_COMPONENT_FOLDER = 'ui-kit';

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Creates new component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        default: 'components',
        message:
          'Enter path where to create a component (e.g. components or ui-kit or components/modal)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name (casing will be changed to dashCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{path}}/{{properCase name}}.tsx',
        templateFile: 'plop/component.hbs',
      },
    ],
  });

  plop.setGenerator('screen', {
    description: 'Creates new screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name (casing will be changed to dashCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{properCase name}}/index.tsx',
        templateFile: 'plop/screen/container.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{camelCase name}}/{{properCase name}}View.ts',
        templateFile: 'plop/screen/view.hbs',
      },
    ],
  });

  plop.setGenerator('icon', {
    description: 'Adds icon',
    prompts: [
      {
        type: 'input',
        name: 'caseName',
        message: 'Enter file name (eg: left-arrow)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter componentName (eg: LeftArrow)',
      },
    ],
    actions: [
      {
        type: 'append',
        path: `src/${ICON_COMPONENT_FOLDER}/Icon.tsx`,
        pattern: '/* PLOP_INJECT_IMPORT */',
        template:
          "import {{pascalCase name}} from '../assets/svg/{{lowerCase caseName}}.svg';",
      },
      {
        type: 'append',
        path: `src/${ICON_COMPONENT_FOLDER}/Icon.tsx`,
        pattern: '/* PLOP_INJECT_COMPONENT */',
        templateFile: 'plop/icon.hbs',
      },
    ],
  });
};
