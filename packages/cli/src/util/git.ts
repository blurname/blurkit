import { execSync, spawnSync } from 'node:child_process'

const getGitRootPath = () => {
  const rootPath = execSync('git rev-parse --show-toplevel').toString().split('\n')[0]
  return rootPath
}

type ExecGitDiffProps =
  | {
    type: 'hash'
    commitHash: string
  }
  | {
    type: 'file'
    fileName: string
  }
const execGitDiff = (props:ExecGitDiffProps) => {
  let diff
  if (props.type === 'hash') {
    diff = spawnSync('git ', ['diff', props.commitHash]).output.toString()
  } else {
    diff = spawnSync('git ', ['diff', props.fileName]).output.toString()
  }
  console.log(diff)
  return diff
}

export {
  getGitRootPath,
  execGitDiff
}
