---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMCHSQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7mW1zk30iJZMs3LCPHzi2QcZNBH5BdtKfa96S1Xkm6AiEA5%2Bh579UQHkmKEkxlY8xzbAkdwpZeGygUOORxOA0twL8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGBUoddSEbMPrpY5OCrcA%2FYPguCH3S7jfUSZfVuDosv9vpZSFeUuKR%2BtwXLe8%2Bd7GsvtajpGRYcw01tn2LhTHv44e5P%2BzJ36shiQAvx5lkPc2L0ZsnH1cw%2BXBrvj4raqRcZgplLtoFyUabVrXJvNnxvbV1388V3yC6yCv4d9MiAdn9CJD2TG4Vud6igJlCDkyzPdAmuJ92VesA1fdHK8qIhn31Ubr9wbw5bp2jnMnEVop1Mrb9GQtU2j6qBVisMWyTHuWi01YnJCWAR9wYayEzp4WScrPlABqbeSqVzr4enxhtB9P11jnGNplh78vfo69bOSocMdUFTBCo%2FNKSMEzYHaXrKZPTcB%2BofUsEv16bcK9F%2BZjnrQsqQVGOqfFenAD8AnLvzja2OPqtbnJ1ThxIEKrLR2FznljuEBe54pRRubxPOEYXck5OIdwZLWz5D1p%2Fxc4PMMVQarHuVwyoLYtAz%2BJoE4XOxiPsECQgAaA%2F5bZqhax7RA03E%2FmbjdOSPXujqXM%2B9lgmy5WqPmyvNm67fcEKpZ1PopRoijLt4LXCfuqkp5YxE2Df3zdlvKCxPdOwYWSispPWGwZJeDN4NM17aNxYght7BWczs53hmE6MOozY3UBe8pfoRqNBR1XFcPwIDnvCGdrxr8VaALMIXOiMoGOqUB8plaOAdIu%2FWLCz4tfkSCi1E00jWROLFW6uv09EIAE9bUZfEGsopK5N6DtmcMTpzGyHkVWlwlUYJGqSgCrlsHuNTMs5lZXoEJX7tdH9WW7sfouFZKtMVHsc3g93pcHnLMKP5d8DN5ho035DApS%2BNzYGsnTSYd44DS%2BIRlOwc4V8yeWyw9trUkXFRf0AnPp%2FgPoJn5w5T5F%2BmVc2%2BnxiezGmZL9YIL&X-Amz-Signature=73fa1bb0c7000cc906c3725a4b3616c7758de1074d0293a36e9c1417f602af35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHMCHSQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7mW1zk30iJZMs3LCPHzi2QcZNBH5BdtKfa96S1Xkm6AiEA5%2Bh579UQHkmKEkxlY8xzbAkdwpZeGygUOORxOA0twL8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGBUoddSEbMPrpY5OCrcA%2FYPguCH3S7jfUSZfVuDosv9vpZSFeUuKR%2BtwXLe8%2Bd7GsvtajpGRYcw01tn2LhTHv44e5P%2BzJ36shiQAvx5lkPc2L0ZsnH1cw%2BXBrvj4raqRcZgplLtoFyUabVrXJvNnxvbV1388V3yC6yCv4d9MiAdn9CJD2TG4Vud6igJlCDkyzPdAmuJ92VesA1fdHK8qIhn31Ubr9wbw5bp2jnMnEVop1Mrb9GQtU2j6qBVisMWyTHuWi01YnJCWAR9wYayEzp4WScrPlABqbeSqVzr4enxhtB9P11jnGNplh78vfo69bOSocMdUFTBCo%2FNKSMEzYHaXrKZPTcB%2BofUsEv16bcK9F%2BZjnrQsqQVGOqfFenAD8AnLvzja2OPqtbnJ1ThxIEKrLR2FznljuEBe54pRRubxPOEYXck5OIdwZLWz5D1p%2Fxc4PMMVQarHuVwyoLYtAz%2BJoE4XOxiPsECQgAaA%2F5bZqhax7RA03E%2FmbjdOSPXujqXM%2B9lgmy5WqPmyvNm67fcEKpZ1PopRoijLt4LXCfuqkp5YxE2Df3zdlvKCxPdOwYWSispPWGwZJeDN4NM17aNxYght7BWczs53hmE6MOozY3UBe8pfoRqNBR1XFcPwIDnvCGdrxr8VaALMIXOiMoGOqUB8plaOAdIu%2FWLCz4tfkSCi1E00jWROLFW6uv09EIAE9bUZfEGsopK5N6DtmcMTpzGyHkVWlwlUYJGqSgCrlsHuNTMs5lZXoEJX7tdH9WW7sfouFZKtMVHsc3g93pcHnLMKP5d8DN5ho035DApS%2BNzYGsnTSYd44DS%2BIRlOwc4V8yeWyw9trUkXFRf0AnPp%2FgPoJn5w5T5F%2BmVc2%2BnxiezGmZL9YIL&X-Amz-Signature=4e8a852dff49d60b9280daa6408887bb173a1328c637cd1999d5ab240399b4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

