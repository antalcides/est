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
	LatexName             teorema
	NextNoIndent          1
	ResetArgs             1
	RequiredArgs          2
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
	LabelString           "Teorema \theteorema."
	Font
	  Shape               Italic
	  Size                Normal
	EndFont
	LabelFont
	  Shape               Up
	  Series              Bold
	EndFont
	
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\theoremname}{_(Teorema)}}
	EndBabelPreamble
	Requires              tcolorbox
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
	LatexName             lema
	LabelString           "Lema \thelema."
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
	LatexName             defi
	RequiredArgs          2
	LabelString           "Definición \thedefinicion."
	Font
	  Shape               Up
	EndFont
	LabelFont
	  Shape               Up
	  Series              Bold
	EndFont
	\providecommand{\definitionname}{_(Definición)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\definitionname}{_(Definición)}}
	EndBabelPreamble
End


Style Ejemplo
	LatexName             ejemplo
	LabelString           "Ejemplo \theejemplo."
	OptionalArgs           1
	LangPreamble
	  \providecommand{\examplename}{_(Ejemplo)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\examplename}{_(Ejemplo)}}
	EndBabelPreamble
End


Style Problema
	CopyStyle             Ejemplo
	LatexName             problema
	LabelString           "Problem \theproblema."
	LangPreamble
	  \providecommand{\problemname}{_(Problema)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\problemname}{_(Problema)}}
	EndBabelPreamble
End


Style Ejercicio
	CopyStyle             Ejemplo
	LatexName             ejercicio
	LabelString           "Ejercicio \theejercicio."
	LangPreamble
	  \providecommand{\exercisename}{_(Ejercicio)}
	EndLangPreamble
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\exercisename}{_(Ejercicio)}}
	EndBabelPreamble
End


Style Nota
	LatexName             nota
	LabelString           "Nota "
	Font
	  Shape               Up
	  Size                Normal
	EndFont
	LabelFont
	  Series              Medium
	  Shape               Italic
	EndFont
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


Style Solución
	Category              Reasoning
	Margin                First_Dynamic
	LatexType             Environment
	LatexName             solucion
	NextNoIndent          1
	ResetArgs             1
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
	LabelString           "Solución"
	Font
	  Shape               Italic
	  Size                Normal
	EndFont
	LabelFont
	  Shape               Up
	  Series              Bold
	EndFont
	
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\solucionname}{_(Solución)}}
	EndBabelPreamble
	Requires              tcolorbox
End


Style Prueba
	CopyStyle             Solución
	LatexName             solucion
	LabelString           "Solución"
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\pruebaname}{_(Prueba)}}
	EndBabelPreamble
End


Style rcode
	CopyStyle             Solución
	LatexName             rcode
	LabelString           "rcode"
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\rcodename}{_(Script)}}
	EndBabelPreamble
End


Style ideabox
	CopyStyle             Solución
	LatexName             ideabox
	LabelString           "ideabox"
End


Style questionbox
	CopyStyle             Solución
	LatexName             questionbox
	LabelString           "questionbox"
End


Style apunte
	CopyStyle             Solución
	LatexName             apunte
	LabelString           "apunte"
End


Style Propiedades
	Category              Reasoning
	Margin                First_Dynamic
	LatexType             Environment
	LatexName             propiedades
	NextNoIndent          1
	ResetArgs             1
	RequiredArgs          1
	Argument 1
		LabelString    "Additional Propiedades Text"
		Tooltip        "Additional text appended to the propiedeades header"
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
	LabelCounter          propiedades
	LabelString           "propiedeades"
	Font
	  Shape               Italic
	  Size                Normal
	EndFont
	LabelFont
	  Shape               Up
	  Series              Bold
	EndFont
	
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\propiedadesname}{_(Propiedades)}}
	EndBabelPreamble
	Requires              tcolorbox
End


Style Propiedad
	CopyStyle             Propiedades
	LatexName             propiedes
	LabelString           "Propiedad \thepropiedades"
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\propiedadesname}{_(Propiedad)}}
	EndBabelPreamble
End


Style Axioma
	CopyStyle             Propiedades
	LatexName             axioma
	LabelString           "Axioma \theaxioma"
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\axiomaname}{_(Axioma)}}
	EndBabelPreamble
End


Style MyBlock
	CopyStyle             Propiedades
	LatexName             MyBlock
	LabelString           "Axioma \theMyBlock"
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\MyBlockname}{_(MyBlock)}}
	EndBabelPreamble
End


Style mybox
	Category              Reasoning
	Margin                First_Dynamic
	LatexType             Environment
	LatexName             mybox
	NextNoIndent          1
	ResetArgs             1
	RequiredArgs          1
	OptionalArgs          1
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
	LabelString           "Código \thecodigo."
	Font
	  Shape               Italic
	  Size                Normal
	EndFont
	LabelFont
	  Shape               Up
	  Series              Bold
	EndFont
	
	BabelPreamble
	  \addto\captions$$lang{\renewcommand{\codigoname}{_(Código)}}
	EndBabelPreamble
	Requires              tcolorbox
End



Input theorems-case.inc
Input theorems-refprefix-matua.inc
