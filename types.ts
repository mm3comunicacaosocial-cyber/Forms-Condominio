
export enum SeguroTipo {
  NOVA_COTACAO = 'nova_cotacao',
  RENOVACAO = 'renovacao',
}

export enum PessoaTipo {
  JURIDICA = 'juridica',
  FISICA = 'fisica',
}

export interface InsuranceFormData {
  tipoSeguro: SeguroTipo;
  seguradora: string;
  classeBonusAnterior: string;
  classeBonusFutura: string;
  quantidadeSinistros: number;
  dataFinalPoliceVigente: string;
  numeroPoliceVigente: string;
  ciVigente: string;
  inicioVigencia: string;
  fimVigencia: string;
  tipoPessoa: PessoaTipo;
  cnpj: string; // Used for CNPJ or CPF
  razaoSocial: string; // Used for Razão Social or Nome Completo
  email: string;
  celular: string;
  cep: string;
  enderecoCompleto: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  tipoCondominio: string;
  segmento: string;
  pavimentacaoAndar: string;
  tipoConstrucao: string;
  anoConstrucao: string;
  numeroBlocos: number;
  equipamentosSeguranca: {
    alarmeLocal: boolean;
    circuitoFechado: boolean;
    alarmeMonitorado: boolean;
    sensorInfravermelho: boolean;
    gradeFechaduraTetra: boolean;
    vigilancia24h: boolean;
    hidrante: boolean;
    detectorFumaca: boolean;
    brigadaIncendio: boolean;
    extintor: boolean;
    sprinkler: boolean;
  };
  avaliacaoRiscos: {
    valorDeNovo: boolean;
    funcionariosProprios: boolean;
    houveSinistro12Meses: boolean;
    elevador: boolean;
    areasVidroMarmore: boolean;
    vagaVisitante: boolean;
    portaoAutomatico: boolean;
    condominioFechado: boolean;
    areasUsoComumLazer: boolean;
    programaUsoAgua: boolean;
  };
}
