import React from 'react'
import Link from 'gatsby-link'
import Menu from 'harmonium/lib/Menu'
import Drawer from 'harmonium/lib/Drawer'
import packageInfo from '../../../package.json'

export default function Navigation() {
  return (
    <Drawer
      fixed
      expanderChildren="+"
      closerChildren="+"
      className="DocsSiteNav"
      left
    >
      <nav>
        <Link className="rev-Brand ExampleBrand Hide--smallOnly" to="/">
          <img src="/images/harmonium-logo-white.png" alt="Harmonium"/>
          <small>Version {packageInfo.version}</small>
        </Link>
        <Menu className="FixedDrawerLinks">
          <Menu.Item>
            <a href="https://github.com/revelrylabs/harmonium">GitHub</a>
          </Menu.Item>
          <Menu.Item>
            <a href="https://www.npmjs.com/package/harmonium">NPM</a>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Starter</h5>
          </Menu.Item>
          <Menu.Item>
            <a href="/settings-templates/settings-templates.zip" download>
              Download Starter Settings
            </a>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Grid</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/grid/">Rows &amp; Columns</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/ExpandingCol/">Expanding Columns</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Forms</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Button/">Buttons</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Checkbox/">Checkboxes</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Datepicker/">Date Picker</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Input/">Inputs</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/InputGroup/">Input Group</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/MediaUploader/">Media Uploader</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Radio/">Radio Buttons</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Select/">Selects</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Textarea/">Textareas</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/TimePicker/">Time Picker</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Slider/">Slider Input</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Lists</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Emptyable/">Emptyable</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Pagination/">Pagination</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Formatting</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Currency/">Currency</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/NumberFormatter/">Number Formatter</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Pluralize/">Pluralize</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Navigation</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Menu/">Menu</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/TopBar/">Top Bar</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Drawer/">Stateful Drawer</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/StatelessDrawer/">StatelessDrawer</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Breadcrumbs/">Breadcrumbs</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Cards &amp; Media</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Card/">Card</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/CardLayout/">Card Layout</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/FlexVideo/">Flex Video</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/MediaObject/">Media Object</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Containers</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Accordion/">Accordion</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Callout/">Callout</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Modal/">Modal</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Sticky/">Sticky</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Tabs/">Tabs</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Table/">Table</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/DataGrid/">DataGrid</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Atoms</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Badge/">Badge</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/CloseButton/">Close Button</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Icon/">Icon</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Utilities</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/AuthenticityToken/">Authenticity Token</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/BrowserSupportWarning/">
              Browser Support Warning
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/HelpText/">Help Text</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Loader/">Loader</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Progress/">Progress</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Social/">Social</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/TextAlign/">Text Align</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Visibility/">Visibility</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Prototyping</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Lipsum/">Lorem Ipsum</Link>
          </Menu.Item>
        </Menu>
        <Menu vertical>
          <Menu.Item text>
            <h5>Map</h5>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Map/DefaultMap/">Default Map Component</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Map/HybridMap/">Hybrid Map</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Map/DesignedSilverMap/">
              Small Designed Silver Map
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/components/Map/DesignedRetroMap/">
              Designed Retro Map
            </Link>
          </Menu.Item>
        </Menu>
      </nav>
    </Drawer>
  )
}