//dark.tsx //light.tsx is the same but imports the light theme css style sheet.
  import React from 'react';
  import '@elastic/eui/dist/eui_theme_dark.css';

  const Theme = () => <></>;
  export default Theme;

//index.tsx
 /* The EuiProvider component doesn't do much to switch between themes yet, 
  * but can help pass eui css variables for custom styling
  */

  //...
  
  /* Using helmet to force the switching of styles by changing the order of the stylesheet imports when loaded in.
   * The last stylesheet to be included/linked, look at <head/> tag in the document, will be the main styling for all EUI components.
   */
  const LightTheme = lazy(() => import('./app/themes/light'));
  const DarkTheme = lazy(() => import('./app/themes/dark'))
  let theme_style_link: string;
  if (theme === 'DARK') theme_style_link = `${window.location.origin}/files/eui_theme_dark.min.css`;
  else if (theme === 'LIGHT')
    theme_style_link = `${window.location.origin}/files/eui_theme_light.min.css`;

  return (
    <EuiErrorBoundary>
      <Suspense fallback={<></>}>
        {theme === 'DARK' && <DarkTheme />}
        {theme === 'LIGHT' && <LightTheme />}
        <Helmet>
          <link rel="stylesheet" type="text/css" href={theme_style_link} />
          <link rel="icon" href={`/files/logo.svg`} />
        </Helmet>

        <EuiProvider colorMode={theme} theme={EUI_THEMES.find((t) => t.value === theme)?.provider}>
          {component_to_render}
        </EuiProvider>
      </Suspense>
    </EuiErrorBoundary>
  );
