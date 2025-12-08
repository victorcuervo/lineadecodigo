---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2PCADU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDMvxg0KDxAItuUU%2FDDzupHrByJ8TeooPqDCwoyvifjAiEAseOdWvoNGw4oZ9eyAZcmSOIN7TJiIt220jSQ6YhAyowqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIQ4aUGJj8FYq5sxircA6eQVkFXERusE0%2BCywJAAZnV5IRscCa36y5Wux3nGmrOH2b8TkCuwIeW8%2FXaWqs7XE%2Fpgy4sHEfZNgkYHKnEO7jDa0WDwhYDJm3tosDLaq6bux2KeksPFdPrlRJi8oD%2FGjOnxAhLT7xJrg5twVRUoQmWXn75tBXYqm8Bv8ADNvZ%2BhBh%2FWrn2zdBXSqgfIqH9WxdsYoGJds4%2BarbqRV3RJhm4xi2kit%2FL8zP8VZlhAnnuiUrBROTC%2BRPwcoZfdo6eDYJX%2B98nGaduJv%2F%2BmNoRJO9paMgiSEG1Swa8qauIeZ4xFwrd1yJnlyLKwVWYtdVDbtmVZT1tAl7IrQesR%2FVdnIZg%2BdSNu1ajJIWfA5WThuybzSaLnPVAybb2dyig0o2GXdA6QSJe7vVos2TmZ9%2BqgCqiICdyOBlh9NbWt3AS5Us8ZRo11RekJGy5SbNp5%2BcyPH3OmNld1W7ULgAiqY%2BnIquWr21pfYMmREcp1WUOH%2FSSDSYCMQOcdnzsPEhn9rTlKYGjbEYu5X7Dybb6s4Aw4%2BQZHHdn%2B0SYzfXP%2B8S3YvOywLx5gBHjbK7s39hk9TvF95fbrieItd%2Bx798l%2FU68QZG2YdhhG6m%2Fx%2FiJKPW08j2ngJyC0nLKWWAyLvDrMN%2Ft2ckGOqUBcXLCJA7a5ykZFOCDqk6%2Fl%2B4UnHOK2X6%2F%2FcfULqETBxKfEATnz65a3vIOZm5A32ky8qsESs%2Bc8MZnLzF6UoiSqHaBkp5EG42s0xSeY5GIPq7%2FKyEeAiT5G1bq91mjJE4w95%2F3ODVoqu6V2R6Csh3He3lsH%2Bo1ODMmPC1%2Bv5nlaD5q7PCPe9tQyCKXpQOuXR7mVtYBbmNoGOtyPV1SLqj%2BxPEutnij&X-Amz-Signature=fe19ea98081638f3cb585332247141be204b1a2835a45757530631c1e9030503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD2PCADU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDMvxg0KDxAItuUU%2FDDzupHrByJ8TeooPqDCwoyvifjAiEAseOdWvoNGw4oZ9eyAZcmSOIN7TJiIt220jSQ6YhAyowqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIQ4aUGJj8FYq5sxircA6eQVkFXERusE0%2BCywJAAZnV5IRscCa36y5Wux3nGmrOH2b8TkCuwIeW8%2FXaWqs7XE%2Fpgy4sHEfZNgkYHKnEO7jDa0WDwhYDJm3tosDLaq6bux2KeksPFdPrlRJi8oD%2FGjOnxAhLT7xJrg5twVRUoQmWXn75tBXYqm8Bv8ADNvZ%2BhBh%2FWrn2zdBXSqgfIqH9WxdsYoGJds4%2BarbqRV3RJhm4xi2kit%2FL8zP8VZlhAnnuiUrBROTC%2BRPwcoZfdo6eDYJX%2B98nGaduJv%2F%2BmNoRJO9paMgiSEG1Swa8qauIeZ4xFwrd1yJnlyLKwVWYtdVDbtmVZT1tAl7IrQesR%2FVdnIZg%2BdSNu1ajJIWfA5WThuybzSaLnPVAybb2dyig0o2GXdA6QSJe7vVos2TmZ9%2BqgCqiICdyOBlh9NbWt3AS5Us8ZRo11RekJGy5SbNp5%2BcyPH3OmNld1W7ULgAiqY%2BnIquWr21pfYMmREcp1WUOH%2FSSDSYCMQOcdnzsPEhn9rTlKYGjbEYu5X7Dybb6s4Aw4%2BQZHHdn%2B0SYzfXP%2B8S3YvOywLx5gBHjbK7s39hk9TvF95fbrieItd%2Bx798l%2FU68QZG2YdhhG6m%2Fx%2FiJKPW08j2ngJyC0nLKWWAyLvDrMN%2Ft2ckGOqUBcXLCJA7a5ykZFOCDqk6%2Fl%2B4UnHOK2X6%2F%2FcfULqETBxKfEATnz65a3vIOZm5A32ky8qsESs%2Bc8MZnLzF6UoiSqHaBkp5EG42s0xSeY5GIPq7%2FKyEeAiT5G1bq91mjJE4w95%2F3ODVoqu6V2R6Csh3He3lsH%2Bo1ODMmPC1%2Bv5nlaD5q7PCPe9tQyCKXpQOuXR7mVtYBbmNoGOtyPV1SLqj%2BxPEutnij&X-Amz-Signature=05985bef6300942b0caeada7fe860bdd65864609c8bfab66ac56f003812a8c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

