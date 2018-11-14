import React from 'react';
import Layout from './layout';

export const Home = () => (
  <Layout>
    <section className="hero is-info is-medium is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            ReactPWA + Social Auth
          </h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut&nbsp;
            aliquip ex ea commodo consequat.
          </h2>
          <a
            className="button is-white is-outlined"
            href="https://github.com/atyantik/example-pawjs-social-auth"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
                      <span className="icon">
                        <i className="fab fa-github" />
                      </span>
            <span title="Source Code">View Source</span>
          </a>
        </div>
      </div>
    </section>
    <div className="box cta">
      <div className="has-text-centered">
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7586505628408924"
          data-ad-slot="5652642939"
          data-ad-format="auto"
        />
      </div>
    </div>
    <section className="container">
      <div className="columns features">
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-content">
              <div className="content">
                <h4>Tristique senectus et netus et. </h4>
                <p>
                  Purus semper eget duis at tellus at urna condimentum mattis.
                  Non blandit massa enim nec. Integer enim neque volutpat ac&nbsp;
                  tincidunt vitae semper quis. Accumsan tortor posuere ac ut&nbsp;
                  consequat semper viverra nam.
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-content">
              <div className="content">
                <h4>Tempor orci dapibus ultrices in.</h4>
                <p>
                  Purus semper eget duis at tellus at urna condimentum mattis.
                  Non blandit massa enim nec. Integer enim neque volutpat ac&nbsp;
                  tincidunt vitae semper quis. Accumsan tortor posuere ac ut&nbsp;
                  consequat semper viverra nam.
                  Accumsan tortor posuere ac ut consequat semper viverra nam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-shady">
            <div className="card-content">
              <div className="content">
                <script src="https://codefund.io/scripts/fefc6de5-a0ce-46e8-a15d-f43733b5b454/embed.js" />
                <div id="codefund_ad" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro column is-8 is-offset-2">
        <h2 className="title">Perfect for developers or designers!</h2>
        <br />
        <p className="subtitle">
          Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi nullam vehicula
          ipsum a. Neque egestas congue quisque egestas diam in arcu cursus.
        </p>
      </div>
      <div className="sandbox">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8 is-shady">
            <article className="tile is-child notification is-white">
              <p className="title">Murphy's law</p>
              <p className="subtitle">Anything that can go wrong will go wrong</p>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-shady">
            <article className="tile is-child notification is-white">
              <p className="title">Main column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
