// Número do WhatsApp da ZENIX (formato internacional: 55 + DDD + número)
export const WHATSAPP_NUMERO = '5563992068388';

/**
 * Gera o link do WhatsApp com mensagem pré-preenchida
 */
export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Links prontos pra ações comuns
 */
export const links = {
  parceiro: linkWhatsApp(
    'Olá! Vim pelo site da ZENIX e quero me tornar parceiro(a).'
  ),
  orcamento: linkWhatsApp(
    'Olá! Gostaria de solicitar um orçamento de produtos ZENIX.'
  ),
  agendamento: linkWhatsApp(
    'Olá! Gostaria de agendar um atendimento com a ZENIX.'
  ),
  produto: (nomeProduto: string) =>
    linkWhatsApp(`Olá! Tenho interesse no produto: ${nomeProduto}`),
};