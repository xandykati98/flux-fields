export type UnsafeDate = Date | { seconds: number, toMillis?: () => number } | number | string

    export type Foto = {
      resized_webp?: string
      resized?: string;
      source: {
        uri: string;
        uri_webp?: string;
      };
      destaque: boolean | undefined;
      ordem: string | number | undefined;
    };
    export interface Arquiteto {
      db_id: string
      nome: string
      foto?: string
      desc: string | null
      created_at: Date | { seconds: number } | string
      edited_at: Date | { seconds: number } | string
    }
    export interface Construtora {
      db_id: string
      desc?: string | null
      exibir_no_site?: boolean
      nome: string
      foto?: string
      created_at: Date | { seconds: number } | string
      edited_at: Date | { seconds: number } | string
    }
    export interface Caracteristica {
      id: string;
      nome: string;
      value: boolean;
    }
    export interface Tipo {
      id: string;
      nome: string;
    }
    export interface Cidade {
      id: number;
      value: number;
      nome: string;
    }
    export interface VendaInfo {
      porcentagem_corretor: number | null,
      porcentagem_empresa: number | null,
      valor_venda: number | null,
      observação: string | null,
      data: Date | { seconds: number },
      id_cliente: string | null,
      id_corretor: string | null,
      venda_com_parceiro?: true
      parceiro_nome?: string
      parceiro_comissao?: number
      dividir_comissao?: string
    }
    export interface Imóvel {
      internacional: boolean
      moeda?: 'Real'|'Euro'|'Dolar'
      temporada: boolean
      situacao_venda?: string
      arquiteto_id?: string
      link_rel?: string
      campos_personalizados_values?: any[]
      empreendimento_id?: string;
      palavras_chaves?: string;
      estado?: {
        id: number | string
        nome?: string
        value?: number | string
      }
      preço_condominio?: number
      long?: number
      lat?: number
      proprietario_id: string | null
      edited_at: Date | { seconds: number } | string;
      aceita_permuta?: boolean;
      cidade: Cidade;
      ativo?: 0 | 1
      foto_destaque_index?: number
      bairro: string;
      rua: string;
      complemento: string;
      bloqueio_fotos?: boolean;
      codigo: string;
      fotos: Foto[];
      titulo?: string;
      preço_venda: number | string;
      preço_venda_desconto: number | string;
      db_id: string;
      dormitórios: number | null | string;
      banheiros: number | null | string;
      venda: boolean;
      locação: boolean;
      preço_locação: number | string;
      preço_locação_desconto: number | string;
      agenciador_id: string | null;
      vagas: number | string;
      area_total: number | string;
      tipo_area_total: "m²" | string | "HA";
      area_útil: number | string;
      tipo_area_útil: "m²" | string | "HA";
      area_construída: number | string;
      cadastrador_id?: string | null;
      created_at?: Date | string
      CEP?: string | null
      IPTU?: string
      tipo_area_construída: "m²" | string | "HA";
      area_terreno: number | string;
      tipo_area_terreno: "m²" | string | "HA";
      area_privativa: number | string;
      tipo_area_privativa: "m²" | string | "HA";
      descrição: string | null;
      video_youtube: string | null;
      link_tour_virtual: string | null;
      tipo: string | null;
      visualizações: number;
      destaque: boolean;
      suítes: null | number | string;
      número: string | null | number;
      caracteristicas: Caracteristica[];
      exibir_endereço_no_site?: boolean;
      venda_exibir_valor_no_site?: boolean;
      locação_exibir_valor_no_site?: boolean;
      propostas?: any[]
      aut_visita?: any[]
      venda_imovel?: VendaInfo
      aluguel_imovel?: {
        fim_contrado: null | Date | { seconds: number },
        valor_mensal: number | null,
        inicio_contrado: null | Date | { seconds: number },
        observação: string | null,
        data: Date | { seconds: number },
        id_cliente: string | null,
        id_corretor: string | null,
      }
      vendido?: boolean;
      alugado?: boolean;
    }
    export interface RedeSocial {
      nome: "instagram" | "facebook" | "youtube" | "linkedin";
      url: string;
    }
    export interface Reserva {
      cliente_id: string;
      comissao: null | number;
      data_inicio: UnsafeDate;
      data_fim: UnsafeDate;
      imovel_id: string;
      autorizado: boolean;
      created_at: UnsafeDate;

      valor_diaria: number;
      taxa_servico: null | number;
      taxa_limpeza: null | number; 
    }
    export interface Depoimento {
      foto: string;
      nome: string;
      texto: string;
      profissao?: string;
      youtube?: string;
    }
    export interface LocalDisponivel {
      bairro: string | null;
      cidade: number;
      estado: number;
    }
    export interface BairroDisponivel extends LocalDisponivel {
      bairro: string;
    }
    export interface LinkExtra {
      url: string;
      nome: string;
    }
    export interface Empreendimento {
      construtora_id?: string
      destaque?: boolean
      andares: number
      ativo: number
      cep: string | null
      rua?: string | null
      long?: number
      lat?: number
      bairro: string | null
      categoria?: string
      caracteristicas: any[]
      cidade_id: null | string | number
      created_at: Date
      db_id: string
      desc: string | null
      edited_at: Date
      endereco: string | null
      estado_id: string | null
      finalidade: string | null
      fotos: any[]
      utilizar_site?: boolean
      nome: string | null
      numero: string | number | null
      pais: "Brasil"
      preco_condominio: string | number | null
      vagas: string | number | null
      porcentage_vendas_feitas: string | number | null
      referencia: string | number | null
      situacao: null | string
      unidades_por_andar: number
      vendido: number
    }
    export interface Empresa {
      contato_info?: boolean;
      utilizar_arquitetos?: boolean;
      utilizar_construtoras?: boolean;
      CRECI?: string;
      bloqueio_de_fotos?: boolean;
      home_busca_preco?: boolean;
      logo_use_bg?: boolean;
      imovel_use_bg?: boolean;
      envie_seu_imovel?: boolean;
      nav_bar_fixed?: boolean;
      mostrar_estados?: boolean;
      exibir_visualizacoes?: boolean;
      facebook_pixel?: string;
      google_code?: string;
      scripts_extras?: string;
      possui_locacao: boolean;
      ocultar_marca_agua: boolean;
      marca_da_agua?: {
        url: string | null;
        posicao: string | null;
        ocultar: boolean;
      };
      info_gen?: {
        filo: string | null;
        atendimento: string | null;
        missao: string | null;
        sobre: string;
        titulo_sobre: string | null;
        header_sobre: string | null;
        foto_sobre: string | null;
        home: number | null;
        header: number | null;
        footer_frase: string | null;
        foto_header: string | null;
        subfrase_site: string | null;
      };
      links_extras?: {
        titulo: string;
        links: LinkExtra[];
      };
      ocultar_equipe: boolean;
      config_dias_prestes_desatualizar?: number | undefined | null;
      config_dias_desatualizar?: number | undefined | null;
      clientes_total?: number;
      imoveis_total?: number;
      imoveis_total_tipos?: object;
      clientes_total_datas?: object;
      caracteristicas_disponiveis: Caracteristica[];
      estado_padrao?: number | null;
      bairros_disponiveis: BairroDisponivel[];
      locais_disponiveis?: LocalDisponivel[];
      db_id: string;
      url_compartilhamento?: string | null;
      url: string[];
      banner: string[];
      favicon: string | null;
      logo: string | null;
      logo_escrita: string | null;
      footer_logo: string;
      redes_sociais: RedeSocial[];
      nome_fantasia: string;
      nome: string;
      endereço: string | null;
      telefone_empresa?: string[];
      telefones_empresa?: object[];
      email?: string;
      depoimentos: Depoimento[];
      tipos_disponiveis: Tipo[];
      frase_topo?: {
        frase: string;
        size: number;
        color: string;
        weight: number;
      };
      video_topo: string | null;
      frase_site: string;
      frase_destaques: string;
      frase_lancamentos: string;
      exibir_local_imovel?: boolean;
      palleta: Palleta;
    }
    export interface Palleta {
      cor_primaria: string | null;
      cor_secundária: string | null;
      cor_auxiliar: string | null;
      cor_rodape: string | null;
      cor_texto_rodape_1: string | null;
      cor_texto_rodape_2: string | null;
      use_color: boolean | null;
    }
    export interface PermissoesInterface {
      /**
       * @deprecated
       */
      clientes: boolean;
      /**
       * @deprecated
       */
      imóveis: boolean;

      /**
       * @description Permissão que força os imóveis registrados pelo usuário a ficarem pendentes
       */
      pendencia_automatica?: boolean;

      agenda: boolean;
      /**
       * @description Permissão que define se o usuário é administrador
       */
      alterar_cadastro: boolean;
      equipes: boolean;
      /**
       * @deprecated
       */
      exportar_dados: boolean;
      financeiro: boolean;
      marketing: boolean;

      anexos_criar: boolean;
      anexos_ver_todos: boolean;
      anexos_excluir: boolean;

      imovel_criar: boolean;
      imovel_editar: boolean;
      imovel_ver_todos: boolean;
      imovel_excluir: boolean;
      visualizar_proprietario: boolean,
      desabilitar_edicao_endereco: boolean;


      lead_criar: boolean;
      lead_editar: boolean;
      lead_ver_todos: boolean;
      lead_excluir: boolean;
      anexos_excluir_default?: boolean,
      pipeline_leads: boolean;

      empreendimentos: boolean;
      desabilitar_publicar_portal: boolean;
      depoimentos: boolean;
    }
    export interface Corretor {
      CPF: string;
      CRECI: string;
      cargo: "Corretor" | "Administrador" | "Gerente";
      db_id: string;
      email: string;
      empresa: string;
      equipe_id: null | string;
      expo_tokens: [];
      desabilitar_publicar_portal: boolean;
      foto: string | null;
      ultimo_login?: Date | { seconds: number }
      imoveis_salvos: [];
      nome: string;
      ocultar_foto: boolean;
      permissões: PermissoesInterface;
      push_web_tokens: [];
      telefone: string | null;
      migração: true;
      instagram: string | null;
    }
    export interface ClienteAtendimento {
      /**
       * Possiveis tipos de atendimento
       */
      tipo: 'visita' | 'ligacao' | 'whatsapp' | 'sms' | 'email' | 'outro'
      /**
       * Descrição do atendimento
       */
      descrição: string
      /**
       * Data de criação do agendamento
       */
      created_at: Date | { seconds: number }
      /**
       * Data marcada para o agendamento ser finalizado
       */
      data: Date | { seconds: number }
      /**
       * Funcionario que agendou o atendimento
       */
      agendador_id: string
      /**
       * Caso o contato já tenha sido realizado
       */
      feito: boolean
      feito_por?: string | null
      feito_data?: Date | { seconds: number } | null
      /**
       * Funcionario que realizou o atendimento
       */
      atendente_id: string
      /**
       * 
       */
      feedback_descrição: string
      cliente_feedback: 'positivo' | 'negativo' | 'indefinido'
    }
    export interface Cliente {
      recadastro?: boolean
      etiquetas?: string[]
      atendimento?: ClienteAtendimento[]
      receber_relatorio?: boolean
      funil_etapa_venda?: number | null | false
      ativo: 1 | 0;
      foto: null;
      imovel_origem?: string;
      db_id: string;
      nome: string;
      email: string;
      registered_at: Date,
      created_at: Date;
      edited_at: Date;
      telefone: string;
      DDD: string | null;
      CPF: null;
      FGTS: null;
      estado_interessado?: string | number | null;
      cidades_interessado?: string[];
      tipos_interessados?: string[];
      faixa_de_valor?: string | number;
      interesse_locacao?: boolean;
      interesse_venda?: boolean;
      veic: string | "";
      conjuge_nome: string | "";
      corretor_responsavel: string | null;
      dependentes: null;
      entrada: 1;
      excluido: boolean;
      visitante_id: string | null;
      imoveis_cadastrados: string[];
      imoveis_visitados: [];
      possui_emprestimo: false;
      renda: null;
      proprietario: boolean;
      status: "Cadastrado recentemente";
      troca: false;
      utilizar_financiamento: false;
      utm_campaign: "";
      utm_content: "";
      utm_medium: "";
      utm_source: "";
      utm_term: "";
    }
    export type Visita = {
        imoveis_visitados: string[]
        paginas_visitadas: string[]
        referrer: string
        time_fim_visita: number
        time_inicio_visita: number
    }
    export type Visitante = {
      db_id:string
      visitas: Visita[]
      dispositivo: string
      time_ultima_visita: number
    }
    export type LeadKeyDate = {
        created_at: Date
        key: string
    }
