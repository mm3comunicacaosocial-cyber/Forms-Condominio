
import React, { useState, ChangeEvent, FormEvent, FC, ReactNode } from 'react';
import { InsuranceFormData, SeguroTipo, PessoaTipo } from './types';
import { FormField } from './components/FormField';
import { CheckboxField } from './components/CheckboxField';
import { RadioGroup } from './components/RadioGroup';
import { BuildingIcon, ShieldCheckIcon } from './components/Icons';

const Section: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80">
    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-6">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
      {children}
    </div>
  </div>
);

const App: FC = () => {
  const [formData, setFormData] = useState<InsuranceFormData>({
    tipoSeguro: SeguroTipo.NOVA_COTACAO,
    seguradora: '',
    classeBonusAnterior: '',
    classeBonusFutura: '',
    quantidadeSinistros: 0,
    dataFinalPoliceVigente: '',
    numeroPoliceVigente: '',
    ciVigente: '',
    inicioVigencia: '',
    fimVigencia: '',
    tipoPessoa: PessoaTipo.JURIDICA,
    cnpj: '',
    razaoSocial: '',
    email: '',
    celular: '',
    cep: '',
    enderecoCompleto: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    tipoCondominio: '',
    segmento: '',
    pavimentacaoAndar: '',
    tipoConstrucao: '',
    anoConstrucao: '',
    numeroBlocos: 1,
    equipamentosSeguranca: {
      alarmeLocal: false,
      circuitoFechado: false,
      alarmeMonitorado: false,
      sensorInfravermelho: false,
      gradeFechaduraTetra: false,
      vigilancia24h: false,
      hidrante: false,
      detectorFumaca: false,
      brigadaIncendio: false,
      extintor: false,
      sprinkler: false,
    },
    avaliacaoRiscos: {
      valorDeNovo: false,
      funcionariosProprios: false,
      houveSinistro12Meses: false,
      elevador: false,
      areasVidroMarmore: false,
      vagaVisitante: false,
      portaoAutomatico: false,
      condominioFechado: false,
      areasUsoComumLazer: false,
      programaUsoAgua: false,
    },
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const { checked, dataset } = e.target as HTMLInputElement;
        const category = dataset.category as keyof (typeof formData);
        if (category === 'equipamentosSeguranca' || category === 'avaliacaoRiscos') {
            setFormData(prev => ({
                ...prev,
                [category]: {
                    ...(prev[category]),
                    [name]: checked
                }
            }));
        }
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
  };
  
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center bg-white p-10 rounded-2xl shadow-lg border border-slate-200">
            <ShieldCheckIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-slate-800 mb-3">Obrigado!</h1>
            <p className="text-slate-600 text-lg mb-8">Seus dados foram enviados com sucesso. Entraremos em contato em breve.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
            >
              Preencher Novo Formulário
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-700">
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-4">
            <BuildingIcon className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
              Formulário de Seguro Condomínio
            </h1>
          </div>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
            Preencha as informações abaixo para receber sua cotação personalizada.
          </p>
        </header>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <Section title="Tipo de Seguro">
              <RadioGroup
                label="Tipo de Cotação"
                name="tipoSeguro"
                options={[
                  { label: 'Nova Cotação', value: SeguroTipo.NOVA_COTACAO },
                  { label: 'Renovação', value: SeguroTipo.RENOVACAO },
                ]}
                selectedValue={formData.tipoSeguro}
                onChange={handleChange}
                className="col-span-1 md:col-span-2 lg:col-span-3"
              />
              {formData.tipoSeguro === SeguroTipo.RENOVACAO && (
                <>
                  <FormField label="Seguradora" name="seguradora" value={formData.seguradora} onChange={handleChange} />
                  <FormField label="Classe de Bônus Anterior" name="classeBonusAnterior" value={formData.classeBonusAnterior} onChange={handleChange} />
                  <FormField label="Classe de Bônus Futura" name="classeBonusFutura" value={formData.classeBonusFutura} onChange={handleChange} />
                  <FormField label="Quantidade de Sinistros" name="quantidadeSinistros" type="number" value={formData.quantidadeSinistros} onChange={handleChange} />
                  <FormField label="Data Final da Apólice Vigente" name="dataFinalPoliceVigente" type="date" value={formData.dataFinalPoliceVigente} onChange={handleChange} />
                  <FormField label="Número da Apólice Vigente" name="numeroPoliceVigente" value={formData.numeroPoliceVigente} onChange={handleChange} />
                  <FormField label="C.I Vigente" name="ciVigente" value={formData.ciVigente} onChange={handleChange} />
                </>
              )}
               <FormField label="Início da Vigência" name="inicioVigencia" type="date" value={formData.inicioVigencia} onChange={handleChange} />
               <FormField label="Fim da Vigência" name="fimVigencia" type="date" value={formData.fimVigencia} onChange={handleChange} />
          </Section>

          <Section title="Dados do Segurado">
              <RadioGroup
                label="Tipo de Pessoa"
                name="tipoPessoa"
                options={[
                  { label: 'Pessoa Jurídica', value: PessoaTipo.JURIDICA },
                  { label: 'Pessoa Física', value: PessoaTipo.FISICA },
                ]}
                selectedValue={formData.tipoPessoa}
                onChange={handleChange}
                className="col-span-1 md:col-span-2 lg:col-span-3"
              />
              <FormField label={formData.tipoPessoa === PessoaTipo.JURIDICA ? 'CNPJ' : 'CPF'} name="cnpj" value={formData.cnpj} onChange={handleChange} />
              <FormField label={formData.tipoPessoa === PessoaTipo.JURIDICA ? 'Razão Social' : 'Nome Completo'} name="razaoSocial" value={formData.razaoSocial} onChange={handleChange} />
              <FormField label="E-mail" name="email" type="email" value={formData.email} onChange={handleChange} />
              <FormField label="Celular" name="celular" type="tel" value={formData.celular} onChange={handleChange} />
          </Section>

          <Section title="Endereço">
              <FormField label="CEP" name="cep" value={formData.cep} onChange={handleChange} />
              <FormField label="Endereço Completo" name="enderecoCompleto" value={formData.enderecoCompleto} onChange={handleChange} className="md:col-span-2" />
              <FormField label="Número" name="numero" value={formData.numero} onChange={handleChange} />
              <FormField label="Complemento" name="complemento" value={formData.complemento} onChange={handleChange} />
              <FormField label="Bairro" name="bairro" value={formData.bairro} onChange={handleChange} />
              <FormField label="Cidade" name="cidade" value={formData.cidade} onChange={handleChange} />
              <FormField label="Estado" name="estado" value={formData.estado} onChange={handleChange} />
          </Section>

          <Section title="Detalhes do Condomínio">
            <FormField label="Tipo de Condomínio" name="tipoCondominio" value={formData.tipoCondominio} onChange={handleChange} />
            <FormField label="Segmento" name="segmento" value={formData.segmento} onChange={handleChange} />
            <FormField label="Pavimentação/Andar" name="pavimentacaoAndar" value={formData.pavimentacaoAndar} onChange={handleChange} />
            <FormField label="Tipo de Construção" name="tipoConstrucao" value={formData.tipoConstrucao} onChange={handleChange} />
            <FormField label="Ano de Construção" name="anoConstrucao" type="number" value={formData.anoConstrucao} onChange={handleChange} />
            <FormField label="Número de Blocos" name="numeroBlocos" type="number" value={formData.numeroBlocos} onChange={handleChange} />
          </Section>

          <Section title="Equipamentos de Segurança">
            {Object.keys(formData.equipamentosSeguranca).map((key) => {
              const formattedLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
              return (
                <CheckboxField
                  key={key}
                  label={formattedLabel}
                  name={key}
                  checked={formData.equipamentosSeguranca[key as keyof typeof formData.equipamentosSeguranca]}
                  onChange={handleChange}
                  data-category="equipamentosSeguranca"
                />
              );
            })}
          </Section>

          <Section title="Avaliação de Riscos">
            {Object.keys(formData.avaliacaoRiscos).map((key) => {
               const formattedLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
               .replace('12', ' 12');
              return (
                <CheckboxField
                  key={key}
                  label={formattedLabel}
                  name={key}
                  checked={formData.avaliacaoRiscos[key as keyof typeof formData.avaliacaoRiscos]}
                  onChange={handleChange}
                  data-category="avaliacaoRiscos"
                />
              );
            })}
          </Section>
          
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Enviar Cotação
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
