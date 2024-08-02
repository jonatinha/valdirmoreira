import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GraduationCap, HandHeart, HeartHandshake, PencilRuler, ShieldCheck } from "lucide-react"
import { FaRoad } from "react-icons/fa";
import { FaShieldDog } from "react-icons/fa6";
import { Button } from "./ui/button";
import { IoIosMore } from "react-icons/io";

export function AccordionPropostas()
{
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                
                <AccordionTrigger><div className="flex flex-row gap-2 items-center"><FaShieldDog width="60" height="60" className="block w-24 scale-150" />Criação de Centros de Apoio e Cuidados para Animais de Rua e de Famílias
                    de Baixa Renda</div></AccordionTrigger>
                <AccordionContent>
                    A proposta para a criação de Centros de Apoio e Cuidados para Animais de Rua e de Famílias de Baixa Renda visa atender às necessidades de saúde e bem-estar animal, além de auxiliar famílias de baixa renda a cuidar de seus pets. Os centros oferecerão pontos de alimentação e água para animais de rua, atendimento veterinário gratuito, exames laboratoriais, tratamentos de saúde, programas de castração, e apoio à adoção responsável. A iniciativa também incluirá campanhas educativas para conscientização sobre maus-tratos e a criação de um canal de denúncia. Através de parcerias com ONGs e empresas, os centros serão sustentáveis e eficientes, promovendo uma cidade mais justa e solidária com os direitos dos animais.
                    <a href="/propostas/animaisderua">
                        <Button
                            variant="outline"
                            className="flex flex-row justify-center items-center bg-trasnparent m-2"
                        ><IoIosMore className="mr-2 h-6 w-6 text-white"
                            />Saiba mais</Button>
                    </a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger><div className="flex flex-row gap-2 items-center">
                    <FaRoad width="24" height="24" className="block w-24" />Proposta para Pavimentação de Vias e Melhoria do Saneamento Básico em
                    Comunidades</div></AccordionTrigger>
                <AccordionContent>
                    A proposta para Pavimentação de Vias e Melhoria do Saneamento Básico em Comunidades busca enfrentar problemas de infraestrutura que afetam a saúde, mobilidade e segurança dos moradores. O projeto inclui o mapeamento das áreas mais necessitadas de pavimentação, execução de obras com materiais de alta qualidade, e implementação de sistemas de saneamento, como redes de esgoto e estações de tratamento. O objetivo é melhorar a qualidade de vida, reduzir doenças e acidentes, valorizar propriedades e preservar o meio ambiente. O financiamento será público, com possíveis parcerias, e a gestão será transparente e participativa, promovendo desenvolvimento social e econômico nas comunidades beneficiadas.
                    <a href="/propostas/pavimentacao">
                        <Button
                            variant="outline"
                            className="flex flex-row justify-center items-center bg-trasnparent m-2"
                        ><IoIosMore className="mr-2 h-6 w-6 text-white"
                            />Saiba mais</Button>
                    </a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger><div className="flex flex-row gap-2 items-center"><HandHeart width="24" height="24" className="block w-24" />Proposta para a Criação de um Centro de Apoio Integral para Pessoas de
                    Baixa Renda</div></AccordionTrigger>
                <AccordionContent>
                    A proposta para a criação de um Centro de Apoio Integral para Pessoas de Baixa Renda visa fornecer serviços essenciais como assistência jurídica, suporte psicológico e orientação vocacional, com um enfoque especial em jovens. O centro, localizado em uma área central e acessível, oferecerá consultas jurídicas gratuitas, atendimento psicológico, educação e capacitação profissional. Contará com uma equipe multidisciplinar qualificada e será financiado por verbas públicas e parcerias. O objetivo é garantir acesso igualitário a serviços fundamentais, promover a inclusão social e fortalecer a comunidade, oferecendo às famílias de baixa renda as ferramentas necessárias para uma vida digna e segura.
                    <a href="/propostas/centrodeapoio">
                        <Button
                            variant="outline"
                            className="flex flex-row justify-center items-center bg-trasnparent m-2"
                        ><IoIosMore className="mr-2 h-6 w-6 text-white"
                            />Saiba mais</Button>
                    </a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger><div className="flex flex-row gap-2 items-center"><HeartHandshake width="24" height="24" className="block w-24" />Proposta para Implantação de uma Clínica de Reabilitação para
                    Dependentes Químicos e Alcoólicos Custeada pelo Governo</div></AccordionTrigger>
                <AccordionContent>
                    A proposta para a implantação de uma Clínica de Reabilitação para Dependentes Químicos e Alcoólicos, totalmente custeada pelo governo, visa combater a dependência de drogas e álcool, oferecendo tratamento integral e suporte necessário para recuperação. A clínica será estrategicamente localizada e equipada com instalações modernas. Oferecerá desintoxicação segura, terapia individual e em grupo, programas de educação e capacitação para reintegração social, e suporte contínuo para os pacientes e suas famílias. Com uma equipe multidisciplinar qualificada, a clínica busca reduzir a criminalidade, melhorar a saúde pública e fortalecer a comunidade.
                    <a href="/propostas/clinicadereabilitacao">
                        <Button
                            variant="outline"
                            className="flex flex-row justify-center items-center bg-trasnparent m-2"
                        ><IoIosMore className="mr-2 h-6 w-6 text-white"
                            />Saiba mais</Button>
                    </a>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}
