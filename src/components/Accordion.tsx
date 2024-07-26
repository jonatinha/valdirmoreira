import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GraduationCap, HeartHandshake, PencilRuler, ShieldCheck } from "lucide-react"

export function AccordionPropostas()
{
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                
                <AccordionTrigger><div className="flex felx-row gap-2"><GraduationCap className="block" />Educação de Qualidade</div></AccordionTrigger>
                <AccordionContent>
                    Comprometemo-nos a lutar por uma educação
                    pública de excelência. Participamos de iniciativas para melhorar a
                    infraestrutura escolar e apoiar estudantes em situação de
                    vulnerabilidade. No futuro, pretendemos intensificar investimentos
                    na capacitação de professores e programas de apoio ao aluno.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger><div className="flex felx-row gap-2"><HeartHandshake className="block" />Saúde para Todos</div></AccordionTrigger>
                <AccordionContent>
                     Com um histórico de apoio a ações comunitárias de
                    saúde, queremos melhorar o acesso aos serviços de saúde pública.
                    Planejamos reduzir filas e garantir um atendimento humanizado e
                    eficaz nas unidades de saúde, baseando-nos em nossa experiência
                    prática e conhecimento das necessidades locais.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger><div className="flex felx-row gap-2"><ShieldCheck className="block" />Segurança e Bem-Estar</div></AccordionTrigger>
                <AccordionContent>
                    Acreditamos em uma cidade mais segura e temos
                    trabalhado em projetos de prevenção à violência e apoio à segurança
                    pública. Pretendemos ampliar esses esforços, promovendo parcerias
                    entre a comunidade e as forças de segurança para criar um ambiente
                    mais seguro para todos.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger><div className="flex felx-row gap-2"><PencilRuler  className="block" />Infraestrutura Urbana</div></AccordionTrigger>
                <AccordionContent>
                    Contribuímos para melhorias em
                    infraestrutura, como pavimentação de ruas e iluminação pública.
                    Nosso compromisso é continuar investindo em projetos que melhorem a
                    qualidade de vida de todos os guarulhenses, criando uma cidade mais
                    moderna e acessível
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}
