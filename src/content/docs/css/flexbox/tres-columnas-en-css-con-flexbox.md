---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOCIM4I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtCVfllkd3VB%2BxLsVfDyhxSg1vGr64SwpZQbaDL4wwNAiBIElrkCjo%2FNrMvLMf2YnGTTumdtL%2BmsE%2FUojOkiUsoeir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfpzBrLFHtyVvBwrlKtwDmFoZtYkhuai%2BfP1%2BTktHlPCNJDNljtF1MOWAJ3rF6gGtjtc%2BiToOFipwB2Ym6bqeg%2FgVNiHsOpWwKla4anPbh81sNWySTR99IwZtya%2F6iLcX3dU9TnWyhK0CQGMrd9lwJsQZJ4Zt4GuX97ntSZ0DSoIdJjKQGyCdYFDAEHP9X%2FG1Nmyv02uvs9Kcs70tihtNGZmDQ0B4yPnaDxSmeHd3QpFaIG%2FrhoB27S2EmBq1YGZTPnCEiS9XQTlcqDxiBkSJ8cfulauhbb0TUapP95KHcxPZbQzHRX7UKiUfcXEO6soIoxq1O1huY5FQQNi8iED9eTQcxtSbtM9fgrbx7Co3PkGxAzzz4jGb5P%2FwKQRS%2BOyP%2BmHhRI%2FqyClIgIrAruM8ly6%2FIoOw6qw7JbrpeO8Lnjad3Cxyy3WUt%2BXUkj6USmbtXWJ0C8ez0eHdux0IaxsYe6VlCGxU4pOQ2Of%2BrjI466mzMKiCU8mBYTQGD%2FTH5S5YZ0jn3dPQqwbvHIpb8Hmh2uFFq%2BuZdHouqcsGHgXs5kTwsUDNtP03k51YRoBQsrOsjxnZWNYhoOOIm18ddoLy5TSSCLVf4bvuiZLO9qguenDGmWrjDh09wOe%2FDJxxnEshfA16shIj7NcAC3IwntTKyQY6pgEms5sZM7vtv7GA%2BIkl%2BHJPhuVNlBPPj3YZtz6ElB39tYic4ZVFi82P10X%2FWUoSNA0komJS2bsIDh%2FtgdN3oLT1KYfCtMxVAZbxo562mi1WjV9d%2FeFCsHbqxXh8HH3ZFQtsXjNEjKwTFKV5y4sjciGSWt%2BGyV7yQOa0VZWZHT56PcKjCN%2BKg%2FexQ%2Fo%2FPKxRw6w5D6ehs5FyhSF9CmRuJ4s5xbpemx3O&X-Amz-Signature=328a8cfa8b3283babb5752a635eb44528d940d7ec19672960d734bcdc04c3c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YOCIM4I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtCVfllkd3VB%2BxLsVfDyhxSg1vGr64SwpZQbaDL4wwNAiBIElrkCjo%2FNrMvLMf2YnGTTumdtL%2BmsE%2FUojOkiUsoeir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMfpzBrLFHtyVvBwrlKtwDmFoZtYkhuai%2BfP1%2BTktHlPCNJDNljtF1MOWAJ3rF6gGtjtc%2BiToOFipwB2Ym6bqeg%2FgVNiHsOpWwKla4anPbh81sNWySTR99IwZtya%2F6iLcX3dU9TnWyhK0CQGMrd9lwJsQZJ4Zt4GuX97ntSZ0DSoIdJjKQGyCdYFDAEHP9X%2FG1Nmyv02uvs9Kcs70tihtNGZmDQ0B4yPnaDxSmeHd3QpFaIG%2FrhoB27S2EmBq1YGZTPnCEiS9XQTlcqDxiBkSJ8cfulauhbb0TUapP95KHcxPZbQzHRX7UKiUfcXEO6soIoxq1O1huY5FQQNi8iED9eTQcxtSbtM9fgrbx7Co3PkGxAzzz4jGb5P%2FwKQRS%2BOyP%2BmHhRI%2FqyClIgIrAruM8ly6%2FIoOw6qw7JbrpeO8Lnjad3Cxyy3WUt%2BXUkj6USmbtXWJ0C8ez0eHdux0IaxsYe6VlCGxU4pOQ2Of%2BrjI466mzMKiCU8mBYTQGD%2FTH5S5YZ0jn3dPQqwbvHIpb8Hmh2uFFq%2BuZdHouqcsGHgXs5kTwsUDNtP03k51YRoBQsrOsjxnZWNYhoOOIm18ddoLy5TSSCLVf4bvuiZLO9qguenDGmWrjDh09wOe%2FDJxxnEshfA16shIj7NcAC3IwntTKyQY6pgEms5sZM7vtv7GA%2BIkl%2BHJPhuVNlBPPj3YZtz6ElB39tYic4ZVFi82P10X%2FWUoSNA0komJS2bsIDh%2FtgdN3oLT1KYfCtMxVAZbxo562mi1WjV9d%2FeFCsHbqxXh8HH3ZFQtsXjNEjKwTFKV5y4sjciGSWt%2BGyV7yQOa0VZWZHT56PcKjCN%2BKg%2FexQ%2Fo%2FPKxRw6w5D6ehs5FyhSF9CmRuJ4s5xbpemx3O&X-Amz-Signature=795f67d622343f17ccb9a1594a2d3aa5ee446d30b4eea73e4ca0fa9da8b5d62b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

