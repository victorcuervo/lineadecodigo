---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCETISYC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPotzFkbb394cEH%2F75cLFpvoL8S0Rv00FGduBIWCjd5AiEA9Sss479i88R%2BCQi7PaCVDfqEN%2FFRMbMc6ODtqN%2FUkLIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2lxQxYI9xF5qcVcCrcA%2FJB%2F%2FvI8DzkAhDXaVF7QKx0D%2BgkoPnGlc2mTRylEmh1BXDcdbpMEM%2BstNytVLMsI3vERRlsdxtZOW9QawEaCGdo%2FapUBSId8dBnpwfnGkc5iUCbJu5uQMxpUCc8qjaz7%2FWRmnEA8ZauQGfDlk%2F1oz2iC22%2B1j%2FnLCov25jyZqLRzFCR31FGiOSr2jQK6vQRp%2F01xPDp6sFZ8z2j%2BR2S7Krf4z%2Fu8oaP1VLPjX4DdTOAq3WiuoghvbL2y%2F42r0dMLNZHImj%2FVey88iVG5MNsxjD3DXmicMt%2F4bPUGfHcjCjYKWcDFz5O%2FmWv7cdfUgAG1GV5AsR3ARV4nsiNjrjR03x29IcW7FBdUMgajtH1BaZ4oAlbvgtrcW%2BoDUShQuQbv616arMiZNeSkbKOBnfssU%2B52rg%2FeuPWzOJbwKQ%2FWOyaaZ%2BiJVVKizKmBoqJRXSWPvwfxgKJHSebN9KKI2eiCvj68iugFe9TUCVjybt8zZp43jPAbx7JzSLRp1Kogl6UKBYVR8l23g%2FK61XQg4LKkQ2%2FBDN%2BIg19n2KdsTOLpu%2BSe1gevmoFVZ8B%2Bp%2Ft9z0I86%2F8y72CT3sKJt2PHUOCxxECmsGiPZVQBXY523FhdxwQ44gDhEPhr%2BpoLemQMLjC28kGOqUBDJudN9ZIGT3fU8xDxUTaxQ%2BlxRQM1ao%2F%2F5P0QHmva3V0NwHyoauM%2B7LWehEpjIuiZxrhFEO2w9lz8wqKHv9nc3Y39c1HFgGI2FncgYt3y2YHtx7lmbcTyA02iuuQ2Wd6whwFqtloeAUF%2FqqoUyb2nkANWIkcbYNzrKvTVLogYh%2B5%2BdfpDsbB7Xcl4wHHj05Kj45ksq4ENd26%2BNCWAZBCvrmIb9%2FR&X-Amz-Signature=706c390921f7ed877ee036ba0e8a0ef9716ee07e8d75f53e68db9e1c3dbc16e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCETISYC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPotzFkbb394cEH%2F75cLFpvoL8S0Rv00FGduBIWCjd5AiEA9Sss479i88R%2BCQi7PaCVDfqEN%2FFRMbMc6ODtqN%2FUkLIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2lxQxYI9xF5qcVcCrcA%2FJB%2F%2FvI8DzkAhDXaVF7QKx0D%2BgkoPnGlc2mTRylEmh1BXDcdbpMEM%2BstNytVLMsI3vERRlsdxtZOW9QawEaCGdo%2FapUBSId8dBnpwfnGkc5iUCbJu5uQMxpUCc8qjaz7%2FWRmnEA8ZauQGfDlk%2F1oz2iC22%2B1j%2FnLCov25jyZqLRzFCR31FGiOSr2jQK6vQRp%2F01xPDp6sFZ8z2j%2BR2S7Krf4z%2Fu8oaP1VLPjX4DdTOAq3WiuoghvbL2y%2F42r0dMLNZHImj%2FVey88iVG5MNsxjD3DXmicMt%2F4bPUGfHcjCjYKWcDFz5O%2FmWv7cdfUgAG1GV5AsR3ARV4nsiNjrjR03x29IcW7FBdUMgajtH1BaZ4oAlbvgtrcW%2BoDUShQuQbv616arMiZNeSkbKOBnfssU%2B52rg%2FeuPWzOJbwKQ%2FWOyaaZ%2BiJVVKizKmBoqJRXSWPvwfxgKJHSebN9KKI2eiCvj68iugFe9TUCVjybt8zZp43jPAbx7JzSLRp1Kogl6UKBYVR8l23g%2FK61XQg4LKkQ2%2FBDN%2BIg19n2KdsTOLpu%2BSe1gevmoFVZ8B%2Bp%2Ft9z0I86%2F8y72CT3sKJt2PHUOCxxECmsGiPZVQBXY523FhdxwQ44gDhEPhr%2BpoLemQMLjC28kGOqUBDJudN9ZIGT3fU8xDxUTaxQ%2BlxRQM1ao%2F%2F5P0QHmva3V0NwHyoauM%2B7LWehEpjIuiZxrhFEO2w9lz8wqKHv9nc3Y39c1HFgGI2FncgYt3y2YHtx7lmbcTyA02iuuQ2Wd6whwFqtloeAUF%2FqqoUyb2nkANWIkcbYNzrKvTVLogYh%2B5%2BdfpDsbB7Xcl4wHHj05Kj45ksq4ENd26%2BNCWAZBCvrmIb9%2FR&X-Amz-Signature=3b24855747328b42b8b957641d5e4f702ffb8e2a677b2f34024d21cb242d372c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

