# Original Author : David L. Johnson <dlj0@lehigh.edu>
# Probably broken by Jean-Marc Lasgouttes <Jean-Marc.Lasgouttes@inria.fr>
# modified and modularized by Antalcides Olivo <antalcides@gmail.com
# Modularized Dic 03 2015
# The environments defined are :
# - Teorema
# - Corolario
# - Lema
# - Proposición
# - Conjectura
# - Definición
# - Ejemplo
# - Problema
# - Ejercicio
# - Nota
# - Claim
# - Prueba
# - Caso (by inclusion)
# - MyBlock
# - Solución
# - Propiedades
# - Propiedades
# - Axioma
# - Script
# - Código
# - ideabox
# - questionbox
# - apunte

Format 49

Style Teorema
	Category              Reasoning
	Margin                First_Dynamic
	LatexType             Environment
	LatexName             thm
	NextNoIndent          1
	ResetArgs             1
	Argument 1
		LabelString    "Additional Teorema Text"
		Tooltip        "Additional text appended to the theorem header"
	EndArgument
	LabelSep              xx
	ParIndent             MMM
	ParSkip               0.4
	ItemSep               0.2
	TopSep                0.7
	BottomSep             0.7
	ParSep                0.3
	Align                 Block
	AlignPossible         Left
	LabelType             Static
	LabelCounter          theorem
	LabelString           "Teorema \thetheorem."
	Font
	  Shape               Italic
	  Size                Normal
	EndFont
	LabelFont
	  Shape               Up
	  Series              Bold
	EndFont
	Preamble
		\theoremstyle{plain}
		\newtheorem{thm}{\protect\theoremname}
	EndPreamble
	LangPreamble
		\providecommand{\theoremname}{_(Teorema)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\theoremname}{_(Teorema)}}
	EndBabelPreamble
	Requires              amsthm
End


Style Corolario
	CopyStyle             Theorem
	DependsOn	      Theorem
	LatexName             cor
	LabelString           "Corolario \thetheorem."
	Preamble
	  \theoremstyle{plain}
	  \newtheorem{cor}[thm]{\protect\corollaryname}
	EndPreamble
	LangPreamble
	  \providecommand{\corollaryname}{_(Corolario)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\corollaryname}{_(Corolario)}}
	EndBabelPreamble
End


Style Lema
	CopyStyle             Teorema
	DependsOn	      Teorema
	LatexName             lem
	LabelString           "Lema \thetheorem."
	Preamble
	  \theoremstyle{plain}
	  \newtheorem{lem}[thm]{\protect\lemmaname}
	EndPreamble
	LangPreamble
	  \providecommand{\lemmaname}{_(Lema)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\lemmaname}{_(Lema)}}
	EndBabelPreamble
End


Style Proposición
	CopyStyle             Teorema
	DependsOn	      Teorema
	LatexName             prop
	LabelString           "Proposición \thetheorem."
	Preamble
	  \theoremstyle{plain}
	  \newtheorem{prop}[thm]{\protect\propositionname}
	EndPreamble
	LangPreamble
	  \providecommand{\propositionname}{_(Proposición}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\propositionname}{_(Proposición)}}
	EndBabelPreamble
End


Style Conjectura
	CopyStyle             Teorema
	DependsOn	      Teorema
	LatexName             conjectura
	LabelString           "Conjectura \thetheorem."
	Preamble
	  \theoremstyle{plain}
	  \newtheorem{conjectura}[thm]{\protect\conjecturename}
	EndPreamble
	LangPreamble
	  \providecommand{\conjecturename}{_(Conjectura)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\conjecturename}{_(Conjectura)}}
	EndBabelPreamble
End


Style Fact
	CopyStyle             Teorema
	DependsOn	      Teorema
	LatexName             fact
	LabelString           "Fact \thetheorem."
	Preamble
	  \theoremstyle{plain}
	  \newtheorem{fact}[thm]{\protect\factname}
	EndPreamble
	LangPreamble
	  \providecommand{\factname}{_(Fact)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\factname}{_(Fact)}}
	EndBabelPreamble
End


Style Definición
	CopyStyle             Teorema
	DependsOn	      Teorema
	LatexName             defn
	LabelString           "Definición \thetheorem."
	Font
	  Shape               Up
	EndFont
	LabelFont
	  Shape               Up
	  Series              Bold
	EndFont
	Preamble
	  \theoremstyle{definition}
	  \newtheorem{defn}[thm]{\protect\definitionname}
	EndPreamble
	LangPreamble
	  \providecommand{\definitionname}{_(Definición)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\definitionname}{_(Definición)}}
	EndBabelPreamble
End


Style Ejemplo
	CopyStyle             Definición
	LatexName             example
	LabelString           "Ejemplo \thetheorem."
	Preamble
	  \theoremstyle{definition}
	  \newtheorem{example}[thm]{\protect\examplename}
	EndPreamble
	LangPreamble
	  \providecommand{\examplename}{_(Ejemplo)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\examplename}{_(Ejemplo)}}
	EndBabelPreamble
End


Style Problema
	CopyStyle             Definición
	LatexName             problem
	LabelString           "Problem \thetheorem."
	Preamble
	  \theoremstyle{definition}
	  \newtheorem{problem}[thm]{\protect\problemname}
	EndPreamble
	LangPreamble
	  \providecommand{\problemname}{_(Problema)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\problemname}{_(Problema)}}
	EndBabelPreamble
End


Style Ejercicio
	CopyStyle             Definición
	LatexName             xca
	LabelString           "Ejercicio \thetheorem."
	Preamble
	  \theoremstyle{definition}
	  \newtheorem{xca}[thm]{\protect\exercisename}
	EndPreamble
	LangPreamble
	  \providecommand{\exercisename}{_(Ejercicio)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\exercisename}{_(Ejercicio)}}
	EndBabelPreamble
End


Style Nota
	CopyStyle             Teorema
	DependsOn	      Teorema
	LatexName             rem
	LabelString           "Nota \thetheorem."
	Font
	  Shape               Up
	  Size                Normal
	EndFont
	LabelFont
	  Series              Medium
	  Shape               Italic
	EndFont
	Preamble
	  \theoremstyle{remark}
	  \newtheorem{rem}[thm]{\protect\remarkname}
	EndPreamble
	LangPreamble
	  \providecommand{\remarkname}{_(Nota)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\remarkname}{_(Nota)}}
	EndBabelPreamble
End


Style Claim
	CopyStyle             Remark
	LatexName             claim
	LabelString           "Claim \thetheorem."
	Preamble
	  \theoremstyle{remark}
	  \newtheorem{claim}[thm]{\protect\claimname}
	EndPreamble
	LangPreamble
	  \providecommand{\claimname}{_(Claim)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\claimname}{_(Claim)}}
	EndBabelPreamble
End

Input theorems-case.inc
Input theorems-refprefix-matua.inc
