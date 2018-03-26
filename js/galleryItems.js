var images = [
  	{ url: 'i/heroes/cellscapes.jpg', caption: 'Cellscapes Exhibition 2012 at University of Guelph McLaughlin Library.'}, 
  	{ url: 'i/heroes/apm-plastids.jpg', caption: 'Elongated peroxisomes extended between plastids in the apm1 mutant'}, 
  	{ url: 'i/heroes/arc-fnreos.jpg', caption: 'mEosFP labelled stromules from epidermal plastids in arc6 mutant. Schattat et al. 2012'},
	{ url: 'i/heroes/crk-pba-actin.jpg', caption: 'Highly bundled F-actin in a trichome of the crooked mutant. Mathur et al. 2003'},
	{ url: 'i/heroes/CX-Eos-tobaco.jpg', caption: 'Trichomes on Tobacco leaf expressing photoconvertible CX:mEosFP'},
	{ url: 'i/heroes/cxeos-tobacco.jpg', caption: 'Multicellular Tobacco trichomes expressing CX:mEosFP'},
	{ url: 'i/heroes/ERMO-leuco.jpg', caption: 'ER and leucoplasts in epidermal cells'},
	{ url: 'i/heroes/FActin-strands.jpg', caption: 'GFP-mTn labeled F-actin in epidermal cells'},
	{ url: 'i/heroes/GER-STRER.jpg', caption: 'ER and Golgi bodies highlighted in Arabidopsis nai1 mutant'},
	{ url: 'i/heroes/H2BEos-BY2.jpg', caption: 'Tobacco BY2 cells expressing H2B:mEosFP and showing different stages of mitosis. Wozny et al. 2012.'},
	{ url: 'i/heroes/H2BEos-root.jpg', caption: 'Nuclei in root higlighted through photoconversion of H2B:mEosFP. Wozny et al.2012.'},
	{ url: 'i/heroes/klkpba2.jpg', caption: 'Leaf epidermis in klunker mutant showing guard cell detachment'},
	{ url: 'i/heroes/PDCB1-Gtal.jpg', caption: 'Arabidopsis plant expressing PDCB1 fused to YFP to show callose deposition'},
	{ url: 'i/heroes/rfyve-GATGf.jpg', caption: 'Guard cells in a double transgenic RFYVE-GATG8f Arabidopsis line'},
	{ url: 'i/heroes/Seed-coat.jpg', caption: 'Arabidopsis seed coat'},
	{ url: 'i/heroes/STRFP-NAI1-GER.jpg', caption: 'ER and Golgi bodies highlighted in nai1 mutant'},
	{ url: 'i/heroes/stromules.jpg', caption: 'Stromules and plastids. A collage.'},
	{ url: 'i/heroes/guard-cells-diff.jpg', caption: 'Guard cells expressing RFP-ER and GFP-F-actin in double transgenic Arabidopsis'},
	{ url: 'i/heroes/dis-trichomes-2.jpg', caption: '<b>Characteristic trichome shape in distorted mutants of Arabidopsis.</b><br>Mathur. BioEssays, 2005.'},
	{ url: 'i/heroes/CX-MEosFP.jpg', caption: 'Onion cell expressing CX:mEosFP. Mathur et al. 2010'},
	{ url: 'i/heroes/Guard-cells.jpg', caption: 'Guard cells on GFP:MAP4-MBD transgenic plant stained with SYTO25'},
	{ url: 'i/heroes/disto-tri2.jpg', caption: 'Trichomes from dis mutant with nuclei stained by SYTO25'},
	{ url: 'i/heroes/any1SEM.jpg', caption: 'Scanning electron micrograph of trichomes from the any1 mutant'},
	{ url: 'i/heroes/distorted.jpg', caption: 'Scanning electron micrograph showing distorted trichomes on an Arabidopsis mutant. Mathur et al. 2003.'},
	{ url: 'i/heroes/trichome1.jpg', caption: 'Trichome from a distorted class mutant. Mathur et al. 2003.'},
	{ url: 'i/heroes/stromules1.jpg', caption: 'Differentially coloured chloroplasts and stromules. Schattat et al. 2012.'},
	{ url: 'i/heroes/epidermal-cells.jpg', caption: 'Disconnected epidermal cells in a leaf of the wurm mutant. Mathur et al. 2003.'},
	{ url: 'i/heroes/GFP-MAP4.jpg', caption: 'Cortical microtubules in leaf epidermal pavement cells'},
	{ url: 'i/heroes/trichomebase.jpg', caption: 'Support cells arranged at the base of a trichome cell. Mathur 2006.'},
	{ url: 'i/heroes/EosPTS1--GmTn.jpg', caption: 'Photoconvertible mEosFP-PTS1 and GFPmTn expressed in an onion epidermal cell'},
	{ url: 'i/heroes/Colleto-MAP.jpg', caption: 'Fungal pathogen growing on an Arabidopsis leaf expressing GFP:MAP4-MBD'},
	{ url: 'i/heroes/BY2-cells-SYTO.jpg', caption: 'Nuclei in Tobacco BY2 cells stained with different SYTO stains'},
	{ url: 'i/heroes/any1-actin.jpg', caption: 'F-actin in swollen trichomes of the any1 mutant'},
	{ url: 'i/heroes/cover-pagePC2012.jpg', caption: 'Differential colouring of plastids and stromules using Photoconvertible mEosFP. Schattat et al. 2012'},
	{ url: 'i/heroes/any1.jpg', caption: 'Swollen trichomes of any1 mutant stained with SYTO25'},
	{ url: 'i/heroes/pollentube.jpg', caption: 'Scanning electron micrograph showing pollen tubes connecting with stigmatic papillae'},
	{ url: 'i/heroes/Peroxules.jpg', caption: 'Green Peroxules are sporadically extended by peroxisomes in response to stress. Sinclair et al. 2009'},
	{ url: 'i/heroes/Microtubule-nucleus.jpg', caption: 'Green cortical microtubules and red SYTO25 stained nuclei in epidermal cells'},
	{ url: 'i/heroes/proGL2-GER.jpg', caption: 'GLABRA2 promoter driven GFP expression in trichomes'},
	{ url: 'i/heroes/ER.jpg', caption: 'Endoplasmic reticulum in leaf epiderml cells. Mathur 2012'},
	{ url: 'i/heroes/taleb15b.jpg', caption: 'GFP:mTn and RFP:EB1 expression in onion epidermal cell.Mathur et al. 2004.'},
	{ url: 'i/heroes/Stromule-ER.jpg', caption: 'A branched stromule aligned with contiguous RFP labelled ER. Schattat et al. 2011'},
	{ url: 'i/heroes/reflected-actin.jpg', caption: 'F-actin mesh in onion epidermal cell. False coloured for depth'},
	{ url: 'i/heroes/guard-mEosFP.jpg', caption: 'Partial photoconversion of mEosFP:MBD-MAP4 in guard cells of a stable transgenic line. Mathur et al. 2010'}
];