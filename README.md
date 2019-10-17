# Create issue

Create issue

This action is a wrapper for one of [octokit's](https://octokit.github.io/rest.js) methods.

Original docs can be found here: https://octokit.github.io/rest.js/#octokit-routes-issues-create

# Quick start

```yaml
- uses: maxkomarychev/create-issue@v0.5.0
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    title: Hello, World!
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|A token to perform API calls
|title|true|The title of the issue.
|body|false|The contents of the issue.
|milestone|false|The number of the milestone to associate this issue with
|labels|false|Labels to associate with this issue.
|assignees|false|Logins for Users to assign to this issue

# Outputs

| Name | Description |
|---|---|---|
|id|Id of the issue
|number|Number of the issue

