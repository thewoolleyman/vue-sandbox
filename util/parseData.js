import yaml from 'js-yaml'

export default function parseData(yamlString) {
  return yaml.safeLoad(yamlString)
}
