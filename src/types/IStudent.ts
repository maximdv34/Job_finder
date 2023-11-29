export interface IStudent {
  nome: string;
  cognome: string;
  dataDiNascita: Date;
  nazioneDiNascita: string;
  cittadinanza: string;
  cittàDiResidenza: string;
  via: string;
  telefono: number;
  mail: string;
  sitoWeb: string;
  linguaMadre: string;
  lingue: string[];
  patente: string;
  disponibilitàAlTrasferimento: boolean;
  disponibilitàALavoroSuTurni: boolean;
  TitoloDiStudio: string;
  AltraFormazione: string;
  tecniche: string[];
  trasversali: string[];
}
