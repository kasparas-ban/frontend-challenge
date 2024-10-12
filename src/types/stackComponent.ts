export type StackComponent = {
  id: string
  created: string
  updated: string
  user: string
  project: string
  is_shared: boolean
  name: string
  type: StackComponentType
  flavor: StackComponentFlavour
  configuration: StackComponentConfigurations
}

export type StackComponentType =
  | 'artifact_store'
  | 'orchestrator'
  | 'experiment_tracker'
  | 'secrets_manager'
  | 'container_registry'
  | 'data_validator'
  | 'model_deployer'

export type StackComponentFlavour =
  | 'local'
  | 'kubeflow'
  | 'mlflow'
  | 'gcp'
  | 'aws'
  | 'vertex'
  | 'deepchecks'
  | 'kserve'
  | 'evidently'
  | 's3'

// MARK: may be possible to split according to stack component type/flavor
export type StackComponentConfigurations = Partial<{
  synchronous: boolean
  timeout: number
  client_args: object
  user_namespace: null
  node_selectors: object
  node_affinity: object
  pod_settings: null
  kubeflow_pipelines_ui_port: number
  kubeflow_hostname: string
  kubeflow_namespace: string
  kubernetes_context: string
  skip_local_validations: boolean
  skip_cluster_provisioning: boolean
  skip_ui_daemon_provisioning: boolean
}>
