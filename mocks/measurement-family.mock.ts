export default {
  getAll: [
    {
      code: "Angle",
      labels: {
        de_DE: "Winkel",
        en_US: "Angle",
        fr_FR: "Angle"
      },
      standard_unit_code: "RADIAN",
      units: {
        RADIAN: {
          code: "RADIAN",
          labels: {
            en_US: "Radian",
            fr_FR: "Radian"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "1"
            }
          ],
          symbol: "rad"
        },
        MILLIRADIAN: {
          code: "MILLIRADIAN",
          labels: {
            en_US: "Milliradian",
            fr_FR: "Milliradian"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.001"
            }
          ],
          symbol: "mrad"
        },
        MICRORADIAN: {
          code: "MICRORADIAN",
          labels: {
            en_US: "Microradian",
            fr_FR: "Microradian"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.000001"
            }
          ],
          symbol: "µrad"
        },
        DEGREE: {
          code: "DEGREE",
          labels: {
            en_US: "Degree",
            fr_FR: "Degré"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.01745329"
            }
          ],
          symbol: "°"
        },
        MINUTE: {
          code: "MINUTE",
          labels: {
            en_US: "Minute",
            fr_FR: "Minute"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.0002908882"
            }
          ],
          symbol: "'"
        },
        SECOND: {
          code: "SECOND",
          labels: {
            en_US: "Second",
            fr_FR: "Seconde"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.000004848137"
            }
          ],
          symbol: "\"",
        },
        GON: {
          code: "GON",
          labels: {
            en_US: "Gon",
            fr_FR: "Gon"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.01570796"
            }
          ],
          symbol: "gon"
        },
        MIL: {
          code: "MIL",
          labels: {
            en_US: "Mil",
            fr_FR: "Mil"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.0009817477"
            }
          ],
          symbol: "mil"
        },
        REVOLUTION: {
          code: "REVOLUTION",
          labels: {
            en_US: "Revolution",
            fr_FR: "Révolution"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "6.283185"
            }
          ],
          symbol: "rev"
        }
      }
    },
    {
      code: "Area",
      labels: {
        ca_ES: "Àrea",
        da_DK: "Areal",
        de_DE: "Fläche",
        en_GB: "Area",
        en_NZ: "Area",
        en_US: "Area",
        es_ES: "Superficie",
        fi_FI: "Alue",
        fr_FR: "Surface",
        it_IT: "Area",
        ja_JP: "エリア",
        pt_BR: "Área",
        ru_RU: "Площадь",
        sv_SE: "Område"
      },
      standard_unit_code: "SQUARE_METER",
      units: {
        SQUARE_MILLIMETER: {
          code: "SQUARE_MILLIMETER",
          labels: {
            ca_ES: "Mil·límetre quadrat",
            da_DK: "Kvadrat millimeter",
            de_DE: "Quadratmillimeter",
            en_GB: "Square millimetre",
            en_NZ: "Square millimetre",
            en_US: "Square millimeter",
            es_ES: "Milímetro cuadrado",
            fi_FI: "Neliömillimetri",
            fr_FR: "Millimètre carré",
            it_IT: "Millimetro quadrato",
            ja_JP: "平方ミリメートル",
            pt_BR: "Milímetro quadrado",
            ru_RU: "Квадратный миллиметр",
            sv_SE: "Kvadratmillimeter"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.000001"
            }
          ],
          symbol: "mm²"
        },
        SQUARE_CENTIMETER: {
          code: "SQUARE_CENTIMETER",
          labels: {
            ca_ES: "Centímetre quadrat",
            da_DK: "Kvadratcentimeter",
            de_DE: "Quadratzentimeter",
            en_GB: "Square centimetre",
            en_NZ: "Square centimetre",
            en_US: "Square centimeter",
            es_ES: "Centímetro cuadrado",
            fi_FI: "Neliösenttimetri",
            fr_FR: "Centimètre carré",
            it_IT: "Centimetro quadrato",
            ja_JP: "平方センチメートル",
            pt_BR: "Centímetro quadrado",
            ru_RU: "Квадратный сантиметр",
            sv_SE: "Kvadratcentimeter"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.0001"
            }
          ],
          symbol: "cm²"
        },
        SQUARE_DECIMETER: {
          code: "SQUARE_DECIMETER",
          labels: {
            ca_ES: "Decímetre quadrat",
            da_DK: "Kvadrat decimeter",
            de_DE: "Quadratdezimeter",
            en_GB: "Square decimetre",
            en_NZ: "Square decimetre",
            en_US: "Square decimeter",
            es_ES: "Decímetro cuadrado",
            fi_FI: "Neliödesimetri",
            fr_FR: "Décimètre carré",
            it_IT: "Decimetro quadrato",
            ja_JP: "平方デシメートル",
            pt_BR: "Decímetro quadrado",
            ru_RU: "Квадратный дециметр",
            sv_SE: "Kvadratdecimeter"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.01"
            }
          ],
          symbol: "dm²"
        },
        SQUARE_METER: {
          code: "SQUARE_METER",
          labels: {
            ca_ES: "Metre quadrat",
            da_DK: "Kvadratmeter",
            de_DE: "Quadratmeter",
            en_GB: "Square metre",
            en_NZ: "Square metre",
            en_US: "Square meter",
            es_ES: "Metro cuadrado",
            fi_FI: "Neliömetri",
            fr_FR: "Mètre carré",
            it_IT: "Metro quadrato",
            ja_JP: "平方メートル",
            pt_BR: "Metro quadrado",
            ru_RU: "Квадратный метр",
            sv_SE: "Kvadratmeter"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "1"
            }
          ],
          symbol: "m²"
        },
        CENTIARE: {
          code: "CENTIARE",
          labels: {
            ca_ES: "Centiàrees",
            da_DK: "Centiare",
            de_DE: "Quadratmeter",
            en_GB: "Centiare",
            en_NZ: "Centiare",
            en_US: "Centiare",
            es_ES: "Centiáreas",
            fi_FI: "Senttiaari",
            fr_FR: "Centiare",
            it_IT: "Centiara",
            ja_JP: "センチアール",
            pt_BR: "Centiare",
            ru_RU: "Центнер",
            sv_SE: "Kvadratmeter"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "1"
            }
          ],
          symbol: "ca"
        },
        SQUARE_DEKAMETER: {
          code: "SQUARE_DEKAMETER",
          labels: {
            ca_ES: "Decàmetre quadrat",
            da_DK: "Kvadrat dekameter",
            de_DE: "Quadratdekameter",
            en_GB: "Square decametre",
            en_NZ: "Square dekametre",
            en_US: "Square dekameter",
            es_ES: "Dekametro cuadrado",
            fi_FI: "Neliödekametri",
            fr_FR: "Décamètre carré",
            it_IT: "Decametro quadrato",
            ja_JP: "平方デカメートル",
            pt_BR: "Decametro quadrado",
            ru_RU: "Квадратный декаметр",
            sv_SE: "Kvadratdekameter"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "100"
            }
          ],
          symbol: "dam²"
        },
        ARE: {
          code: "ARE",
          labels: {
            ca_ES: "Àrea",
            da_DK: "Are",
            de_DE: "Ar",
            en_GB: "Sú",
            en_NZ: "Are",
            en_US: "Are",
            es_ES: "Área",
            fi_FI: "Aari",
            fr_FR: "Are",
            it_IT: "Ara",
            ja_JP: "アール",
            pt_BR: "Area",
            ru_RU: "Ар",
            sv_SE: "Hektar"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "100"
            }
          ],
          symbol: "a"
        },
        SQUARE_HECTOMETER: {
          code: "SQUARE_HECTOMETER",
          labels: {
            ca_ES: "Hectòmetre quadrat",
            da_DK: "Kvadrat hectometer",
            de_DE: "Quadrathektometer",
            en_GB: "Square hectometre",
            en_NZ: "Square hectometre",
            en_US: "Square hectometer",
            es_ES: "Hectómetro cuadrado",
            fi_FI: "Neliöhehtometri",
            fr_FR: "Hectomètre carré",
            it_IT: "Ettometro quadrato",
            ja_JP: "平方ヘクトメートル",
            pt_BR: "Hectómetro quadrado",
            ru_RU: "Квадратный гектометр",
            sv_SE: "Kvadrathektameter"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "10000"
            }
          ],
          symbol: "hm²"
        },
        HECTARE: {
          code: "HECTARE",
          labels: {
            ca_ES: "Hectàrees",
            da_DK: "Hektar",
            de_DE: "Hektar",
            en_GB: "Hectare",
            en_NZ: "Hectare",
            en_US: "Hectare",
            es_ES: "Hectárea",
            fi_FI: "Hehtaari",
            fr_FR: "Hectare",
            it_IT: "Ettaro",
            ja_JP: "ヘクタール",
            pt_BR: "Hectare",
            ru_RU: "Гектар",
            sv_SE: "Hektar"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "10000"
            }
          ],
          symbol: "ha"
        },
        SQUARE_KILOMETER: {
          code: "SQUARE_KILOMETER",
          labels: {
            ca_ES: "Quilòmetre quadrat",
            da_DK: "Kvadrat kilometer",
            de_DE: "Quadratkilometer",
            en_GB: "Square kilometre",
            en_NZ: "Square kilometre",
            en_US: "Square kilometer",
            es_ES: "Kilómetro cuadrado",
            fi_FI: "Neliökilometri",
            fr_FR: "Kilomètre carré",
            it_IT: "Chilometro quadrato",
            ja_JP: "平方キロメートル",
            pt_BR: "Quilômetro quadrado",
            ru_RU: "Квадратный километр",
            sv_SE: "Kvadratkilometer"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "1000000"
            }
          ],
          symbol: "km²"
        },
        SQUARE_MIL: {
          code: "SQUARE_MIL",
          labels: {
            ca_ES: "Mil quadrat",
            da_DK: "Kvadrat mil",
            de_DE: "Quadratmil",
            en_GB: "Square mil",
            en_NZ: "Square mil",
            en_US: "Square mil",
            es_ES: "Mil cuadrado",
            fi_FI: "Neliötuhannesosatuuma",
            fr_FR: "Mil carré",
            it_IT: "Mil quadrati",
            ja_JP: "平方ミル",
            pt_BR: "Mil quadrada",
            ru_RU: "Квадратная миля",
            sv_SE: "Kvadratmil"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.00000000064516"
            }
          ],
          symbol: "sq mil"
        },
        SQUARE_INCH: {
          code: "SQUARE_INCH",
          labels: {
            ca_ES: "Polzada quadrada",
            da_DK: "Kvadrattomme",
            de_DE: "Quadratzoll",
            en_GB: "Square inch",
            en_NZ: "Square inch",
            en_US: "Square inch",
            es_ES: "Pulgada cuadrada",
            fi_FI: "Neliötuuma",
            fr_FR: "Pouce carré",
            it_IT: "Pollice quadrato",
            ja_JP: "平方インチ",
            pt_BR: "Polegada quadrada",
            ru_RU: "Квадратный дюйм",
            sv_SE: "Kvadrattum"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.00064516"
            }
          ],
          symbol: "in²"
        },
        SQUARE_FOOT: {
          code: "SQUARE_FOOT",
          labels: {
            ca_ES: "Peu quadrat",
            da_DK: "Kvadratfod",
            de_DE: "Quadratfuß",
            en_GB: "Square foot",
            en_NZ: "Square foot",
            en_US: "Square foot",
            es_ES: "Pies cuadrados",
            fi_FI: "Neliöjalka",
            fr_FR: "Pied carré",
            it_IT: "Piede quadrato",
            ja_JP: "平方フィート",
            pt_BR: "Pé quadrado",
            ru_RU: "Квадратный фут",
            sv_SE: "Kvadratfot"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.09290304"
            }
          ],
          symbol: "ft²"
        },
        SQUARE_YARD: {
          code: "SQUARE_YARD",
          labels: {
            ca_ES: "Iarda quadrada",
            da_DK: "Kvadrat yard",
            de_DE: "Quadratyard",
            en_GB: "Square yard",
            en_NZ: "Square yard",
            en_US: "Square yard",
            es_ES: "Yarda cuadrada",
            fi_FI: "Neliöjaardi",
            fr_FR: "Yard carré",
            it_IT: "Yard quadrata",
            ja_JP: "平方ヤード",
            pt_BR: "Jarda quadrada",
            ru_RU: "Квадратный ярд",
            sv_SE: "Kvadratyard"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "0.83612736"
            }
          ],
          symbol: "yd²"
        },
        ARPENT: {
          code: "ARPENT",
          labels: {
            ca_ES: "Arpent",
            da_DK: "Arpent",
            de_DE: "Arpent",
            en_GB: "Arpent",
            en_NZ: "Arpent",
            en_US: "Arpent",
            es_ES: "Arpende",
            fi_FI: "Eekkeri",
            fr_FR: "Arpent",
            it_IT: "Arpenti",
            ja_JP: "アルパン",
            pt_BR: "Arpent",
            ru_RU: "Арпан",
            sv_SE: "Arpent"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "3418.89"
            }
          ],
          symbol: "arpent"
        },
        ACRE: {
          code: "ACRE",
          labels: {
            ca_ES: "Acre",
            da_DK: "Tønder",
            de_DE: "Morgen",
            en_GB: "Acre",
            en_NZ: "Acre",
            en_US: "Acre",
            es_ES: "Acre",
            fi_FI: "Eekkeri",
            fr_FR: "Acre",
            it_IT: "Acri",
            ja_JP: "エーカー",
            pt_BR: "Acre",
            ru_RU: "Акр",
            sv_SE: "Tunnland"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "4046.856422"
            }
          ],
          symbol: "A"
        },
        SQUARE_FURLONG: {
          code: "SQUARE_FURLONG",
          labels: {
            ca_ES: "Furlong quadrat",
            da_DK: "Kvadratisk furlong",
            de_DE: "Quadrat-Achtelmeile",
            en_GB: "Square furlong",
            en_NZ: "Square furlong",
            en_US: "Square furlong",
            es_ES: "Estadio cuadrado",
            fi_FI: "Vakomitta",
            fr_FR: "Furlong carré",
            it_IT: "Furlong quadrato",
            ja_JP: "平方ハロン",
            pt_BR: "Furlong quadrado",
            ru_RU: "Квадратный фурлонг",
            sv_SE: "Kvadratfurlong"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "40468.726"
            }
          ],
          symbol: "fur²"
        },
        SQUARE_MILE: {
          code: "SQUARE_MILE",
          labels: {
            ca_ES: "Milla quadrada",
            da_DK: "Kvadrat mil",
            de_DE: "Quadratmeile",
            en_GB: "Square mile",
            en_NZ: "Square mile",
            en_US: "Square mile",
            es_ES: "Milla cuadrada",
            fi_FI: "Neliömaili",
            fr_FR: "Mile carré",
            it_IT: "Miglio quadrato",
            ja_JP: "平方マイル",
            pt_BR: "Milha quadrada",
            ru_RU: "Квадратная миля",
            sv_SE: "Kvadratmile"
          },
          convert_from_standard: [
            {
              operator: "mul",
              value: "2589988.110336"
            }
          ],
          symbol: "mi²"
        }
      }
    }
  ]
};
