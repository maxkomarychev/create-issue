# Create issue

Create issue

This action is a wrapper for one of [octokit's](https://octokit.github.io/rest.js) methods.

Original docs can be found here: https://octokit.github.io/rest.js/#octokit-routes-issues-create

# Usage

```yaml
- uses: maxkomarychev/create-issue@v0.4.0
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    title: Hello, World!
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```
