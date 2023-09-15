/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import styled from 'styled-components';

import type { Layouts } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Wrapper = styled.div`
  position: relative;
  background: red;
  min-height: 100vh;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  .react-grid-layout {
    margin: -1px 0;
  }
  .vessel {
    &:hover {
      .draggable,
      .react-resizable-handle {
        opacity: 1;
      }
    }
  }
  .draggable {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px 0;
    user-select: none;
    cursor: grab;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    z-index: 4;
    hr {
      margin: 0;
      border: 0;
      width: 80px;
      height: 2px;
      background: ${(props) => props.theme.lineColorSecond};
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      hr {
        background: #00ba3d;
      }
    }
  }
  .react-resizable-handle {
    background: none;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    z-index: 4;
    &::after {
      border-right: 2px solid ${(props) => props.theme.lineColorSecond} !important;
      border-bottom: 2px solid ${(props) => props.theme.lineColorSecond} !important;
      transition: all 0.3s ease-in-out;
    }
    &:hover::after {
      border-right: 2px solid #00ba3d !important;
      border-bottom: 2px solid #00ba3d !important;
    }
  }
  .main {
    background: yellow;
    height: 100%;
  }
`


const REACT_GRID_LAYOUT_BEDROCK = {
  lg: [
    { i: 'infos', x: 0, y: 0, w: 14, h: 2, minW: 8, minH: 2 },
    { i: 'infos2', x: 0, y: 3, w: 14, h: 22, minW: 12, minH: 14 },
    { i: 'infos3', x: 14, y: 0, w: 5, h: 24, minW: 5, minH: 22 },
    { i: 'infos4', x: 0, y: 22, w: 19, h: 20, minW: 10, minH: 8 },
    { i: 'infos5', x: 19, y: 0, w: 5, h: 24, minW: 5, minH: 18 },
    { i: 'infos6', x: 19, y: 0, w: 5, h: 20, minW: 5, minH: 10 },
  ],
  md: [
    { i: 'infos', x: 0, y: 0, w: 12, h: 2, minW: 6, minH: 2 },
    { i: 'infos2', x: 0, y: 3, w: 12, h: 20, minW: 10, minH: 14 },
    { i: 'infos3', x: 12, y: 0, w: 4, h: 22, minW: 4, minH: 22 },
    { i: 'infos4', x: 0, y: 22, w: 16, h: 18, minW: 8, minH: 6 },
    { i: 'infos5', x: 16, y: 0, w: 4, h: 22, minW: 4, minH: 18 },
    { i: 'infos6', x: 16, y: 0, w: 4, h: 18, minW: 4, minH: 10 },
  ],
  sm: [
    { i: 'infos', x: 0, y: 0, w: 12, h: 2, minW: 6, minH: 2 },
    { i: 'infos2', x: 0, y: 3, w: 12, h: 18, minW: 10, minH: 14 },
    { i: 'infos3', x: 12, y: 0, w: 4, h: 20, minW: 4, minH: 20 },
    { i: 'infos4', x: 0, y: 20, w: 16, h: 16, minW: 8, minH: 6 },
    { i: 'infos5', x: 16, y: 0, w: 4, h: 20, minW: 4, minH: 18 },
    { i: 'infos6', x: 16, y: 0, w: 4, h: 16, minW: 4, minH: 10 },
  ],
  xs: [
    { i: 'infos', x: 0, y: 0, w: 12, h: 2, minW: 6, minH: 2 },
    { i: 'infos2', x: 0, y: 3, w: 12, h: 18, minW: 10, minH: 14 },
    { i: 'infos3', x: 12, y: 0, w: 5, h: 20, minW: 5, minH: 20 },
    { i: 'infos4', x: 0, y: 20, w: 17, h: 16, minW: 8, minH: 6 },
    { i: 'infos5', x: 17, y: 0, w: 5, h: 20, minW: 5, minH: 18 },
    { i: 'infos6', x: 17, y: 0, w: 5, h: 16, minW: 5, minH: 10 },
  ],
};

function App() {

  const [layouts, setLayouts] = React.useState<Layouts>(REACT_GRID_LAYOUT_BEDROCK);

  const onLayoutChange = (layout: any, layouts: Layouts) => {
    setLayouts({ ...layouts });
  };

  return (
    <Wrapper>
      <ResponsiveReactGridLayout
        breakpoints={{ lg: 1920, md: 1680, sm: 1440, xs: 1280 }}
        cols={{ lg: 24, md: 20, sm: 20, xs: 22 }}
        draggableHandle=".draggable"
        layouts={layouts}
        margin={[1, 1]}
        containerPadding={[0, 0]}
        rowHeight={34}
        onLayoutChange={onLayoutChange}
        isBounded
      >
        <div className="vessel guide-1" key="infos">
          <div className="draggable">
            <hr />
          </div>
          <div className='main'>aaaa</div>
        </div>
        <div className="vessel guide-1" key="infos2">
          <div className="draggable">
            <hr />
          </div>
          <div className='main'>bbbb</div>
        </div>
        <div className="vessel guide-1" key="infos3">
          <div className="draggable">
            <hr />
          </div>
          <div className='main'>cccc</div>
        </div>
        <div className="vessel guide-1" key="infos4">
          <div className="draggable">
            <hr />
          </div>
          <div className='main'>dddd</div>
        </div>

        <div className="vessel guide-1" key="infos5">
          <div className="draggable">
            <hr />
          </div>
          <div className='main'>eeee</div>
        </div>

        <div className="vessel guide-1" key="infos6">
          <div className="draggable">
            <hr />
          </div>
          <div className='main'>ffff</div>
        </div>


      </ResponsiveReactGridLayout>
    </Wrapper>
  )
}

export default App
