---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOYQVTS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzJYrb38umRY9gZZ%2B3wQQJqGSb6Igj956dndC31ZRwVAIgCI9153e4NAFAjugbZGVjIjmeOyl576NfPL44n%2BzC6ywqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRog5qV9XHWAd3NQCrcA6P3fcgZ%2FEV70peSRtBiBU8k8uBfX%2BsgMISt7vXOFS%2FcG9t76JXOZMS%2BvpJUMryQzqQCYJ2FP0j3%2FrX%2FWFdPDb9yrWu83GI3xki4eardgqNrNcWhWH2urfcIy3ssrnymnVM394nSQ3%2BQWXD2sRJAWmKi7%2FGAShoYKhsa2Paq1pZyT0%2B9uk9TRCPpgaXiQktud0bLY%2FWpOM2XPB99fXL3C0a9xBzjya%2BRcI%2BJdwTCr6nVW9nlCu4jsA%2B4%2BW3dzc2zSpxvTpZuOSnFTlaPOON%2F6xKRcmYgcNGqa%2BBZyf9nioO%2F7DhR31ylKOTl44PcEIfLGEZMnhCGz4NXay1SPda9pNi5lWT6%2FqgrIgObbb%2FiQ5i0COv6s2ppHosX0tRm0SXP076sdtOkz8%2BttpBSLKVNbz%2BQ%2FAE1a7UFsc0%2B1oFCW2tuBBXnvPPVKtFElqoWgoWIi%2FeaKc0kxYF%2Bmi1fOx%2FyG3MisICkG%2BN42rgk7XpeeukIEZT1GQHTGMvnMj2OeNC2MZf%2B5kIaItistQ6%2BB3R3VXnfUNzQvqJPN4vxi2T6nBgmzHbkjXHXzipIw5ZJzu5Pj3w%2B84NQDSjTA6bZthdtXO4zAhFRu2JnvCK3jrmdRrOPcV3e3lyGvIbPjX8tMK%2BQ28kGOqUBwan3IVt2U28sPQcoVS3ROyDc4DrJcVq3kK%2BMkNW6PMzPo4HrUvIsOLlpIey2AnCnWUOdsuPPqpzeKzDlKKagNfjReuyLnvnNqiMTipy2BtPDufYRrb4Gdiuci5IXfrKx%2FH%2BS5xweJiEGS9s8XWjeqSEjTttqkycxE1su04kjH%2FI1KfG9zLfwRArQClbjDXPUf%2FmCw8TyWHgZjU3BpOAnY71jiMLQ&X-Amz-Signature=783d9d9b094342d8efe2980480d2623619b5088d6b238f335bcabb162ce09a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMOYQVTS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzJYrb38umRY9gZZ%2B3wQQJqGSb6Igj956dndC31ZRwVAIgCI9153e4NAFAjugbZGVjIjmeOyl576NfPL44n%2BzC6ywqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRog5qV9XHWAd3NQCrcA6P3fcgZ%2FEV70peSRtBiBU8k8uBfX%2BsgMISt7vXOFS%2FcG9t76JXOZMS%2BvpJUMryQzqQCYJ2FP0j3%2FrX%2FWFdPDb9yrWu83GI3xki4eardgqNrNcWhWH2urfcIy3ssrnymnVM394nSQ3%2BQWXD2sRJAWmKi7%2FGAShoYKhsa2Paq1pZyT0%2B9uk9TRCPpgaXiQktud0bLY%2FWpOM2XPB99fXL3C0a9xBzjya%2BRcI%2BJdwTCr6nVW9nlCu4jsA%2B4%2BW3dzc2zSpxvTpZuOSnFTlaPOON%2F6xKRcmYgcNGqa%2BBZyf9nioO%2F7DhR31ylKOTl44PcEIfLGEZMnhCGz4NXay1SPda9pNi5lWT6%2FqgrIgObbb%2FiQ5i0COv6s2ppHosX0tRm0SXP076sdtOkz8%2BttpBSLKVNbz%2BQ%2FAE1a7UFsc0%2B1oFCW2tuBBXnvPPVKtFElqoWgoWIi%2FeaKc0kxYF%2Bmi1fOx%2FyG3MisICkG%2BN42rgk7XpeeukIEZT1GQHTGMvnMj2OeNC2MZf%2B5kIaItistQ6%2BB3R3VXnfUNzQvqJPN4vxi2T6nBgmzHbkjXHXzipIw5ZJzu5Pj3w%2B84NQDSjTA6bZthdtXO4zAhFRu2JnvCK3jrmdRrOPcV3e3lyGvIbPjX8tMK%2BQ28kGOqUBwan3IVt2U28sPQcoVS3ROyDc4DrJcVq3kK%2BMkNW6PMzPo4HrUvIsOLlpIey2AnCnWUOdsuPPqpzeKzDlKKagNfjReuyLnvnNqiMTipy2BtPDufYRrb4Gdiuci5IXfrKx%2FH%2BS5xweJiEGS9s8XWjeqSEjTttqkycxE1su04kjH%2FI1KfG9zLfwRArQClbjDXPUf%2FmCw8TyWHgZjU3BpOAnY71jiMLQ&X-Amz-Signature=e4f6548a9190e92b674855ea5e00cb20e17e6eb70823724428638833da2571e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

