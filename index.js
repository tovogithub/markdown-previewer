const newLocal = `
# Learning to Code 
## HTML basics

[Learn more about HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

inline code \`<dt></dt>\`
a code block: 
\`\`\`
var x = 1
var y = 2
var z = x + y;
\`\`\`
- Introduction to HTML
- Multimedia and embedding
- HTML tables

> Learning to code is useful no matter what your career ambitions are.

![html.png](https://tinypic.host/images/2023/01/08/html.png)

**HyperText Markup Language**
`;
const state = newLocal;
marked.setOptions({
  breaks: true,
});

class Program extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: state,
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const { text } = this.state;

    const markdown = marked.parse(text, { breaks: true });

    return (
      <div>
        <h3 className="text-center m-3">Markdown Previewer</h3>
        <div className="row">
          <div className="col-6">
            <h3 className="text-center">Source Code</h3>
            <textarea
              className="form-control p-2"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h3 className="text-center">result</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(text),
              }}
              id="preview"
            />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Program />, document.getElementById("source"));
