---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PB3B7DC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkXEGAoz8M37QNLuwghW4StBYy9HlZxm2c7tMOQBDQ3wIgXlGBVbZQ%2FcShZRPRpQL22o7swqGlVL%2FsS3vq%2FaSvMPkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDErw3945q4VvIaGpRyrcA4DN4elRChTqVBZVDM%2F7hk8hIykFoQ6ZhLq0V2IXYy0%2FsfCpkq5Nt%2F4xhe3yHOFL2fIDrUi4NWkAJRUnyqw12t2rkMt6ttX54CMIArwyKWT6PPAvgtYFZqQtx9mErUIxaj0P3tSaEPsOQydd1Y4UaqUJdw9S%2Bs1Dn1fChIKGBGENtoRR61rgJRxzUnJrKQV6Oz8QJrn2MfVNtVEV%2F5Y9mdsov3umm9vucXnPlgTX8d1cZJf7OaJgALkq76F0KINE3OkmrittPgdRZtqb3gOTEoZx0cvD8kQLLPGJbVna85mN9nBJgZfcI2viwhnlSpHF2NcZGc%2FHqp5GTpftQ1oFmEKSk97jBYFPrS6o%2BCkyqnVpkiWyDO%2FlcQQmxTbKFvTizH1HiI9LCSeXNT6jRiBtFsIqwxiK54GzGvZlNnWZ8FTMqKsKTH1nSe1z75N0exitg8TQ76uSPnuz0THfYak1mIHTEyZZTrAD3TnPYRv4VdJnylXdbQarLmIzfReGj2kCeqaRpNMCRhut%2Ba%2Fkq5uuv%2BHH7yMugKa6T1POYuPckvR3jvgdx78YYxon8JjK43gR0MvIjNuNT72Z9RI4vqkDvTh%2BIyuuQfQLf1bc3truhlLj0u2%2Fze%2FkIdxVCLIVMO7F0ckGOqUBmaBH4%2FXk%2BUK8kpllZNe2vscuruPRjYgQYAplAxzfrlExA97XO3mrnmeRePF%2BkAMdengUckRApF2SDNC0Rf8lyGVgypSFZYPfksR%2BJQ8CUixUIAI1JrSD4fbDlZCH%2Fz9emKbCjIqTyKf4V%2BRLWhnxVhoqfcSS70UbIB6CxjH7mHu%2B2ihtLEevUnzAgaDcNchk%2Bv8mjhvoeFePyIJ7j3ZeTnpq1WyX&X-Amz-Signature=e9aedd1c3f7187626d934482b0ad21ba341541cebd456461ac332f992479b007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PB3B7DC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkXEGAoz8M37QNLuwghW4StBYy9HlZxm2c7tMOQBDQ3wIgXlGBVbZQ%2FcShZRPRpQL22o7swqGlVL%2FsS3vq%2FaSvMPkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDErw3945q4VvIaGpRyrcA4DN4elRChTqVBZVDM%2F7hk8hIykFoQ6ZhLq0V2IXYy0%2FsfCpkq5Nt%2F4xhe3yHOFL2fIDrUi4NWkAJRUnyqw12t2rkMt6ttX54CMIArwyKWT6PPAvgtYFZqQtx9mErUIxaj0P3tSaEPsOQydd1Y4UaqUJdw9S%2Bs1Dn1fChIKGBGENtoRR61rgJRxzUnJrKQV6Oz8QJrn2MfVNtVEV%2F5Y9mdsov3umm9vucXnPlgTX8d1cZJf7OaJgALkq76F0KINE3OkmrittPgdRZtqb3gOTEoZx0cvD8kQLLPGJbVna85mN9nBJgZfcI2viwhnlSpHF2NcZGc%2FHqp5GTpftQ1oFmEKSk97jBYFPrS6o%2BCkyqnVpkiWyDO%2FlcQQmxTbKFvTizH1HiI9LCSeXNT6jRiBtFsIqwxiK54GzGvZlNnWZ8FTMqKsKTH1nSe1z75N0exitg8TQ76uSPnuz0THfYak1mIHTEyZZTrAD3TnPYRv4VdJnylXdbQarLmIzfReGj2kCeqaRpNMCRhut%2Ba%2Fkq5uuv%2BHH7yMugKa6T1POYuPckvR3jvgdx78YYxon8JjK43gR0MvIjNuNT72Z9RI4vqkDvTh%2BIyuuQfQLf1bc3truhlLj0u2%2Fze%2FkIdxVCLIVMO7F0ckGOqUBmaBH4%2FXk%2BUK8kpllZNe2vscuruPRjYgQYAplAxzfrlExA97XO3mrnmeRePF%2BkAMdengUckRApF2SDNC0Rf8lyGVgypSFZYPfksR%2BJQ8CUixUIAI1JrSD4fbDlZCH%2Fz9emKbCjIqTyKf4V%2BRLWhnxVhoqfcSS70UbIB6CxjH7mHu%2B2ihtLEevUnzAgaDcNchk%2Bv8mjhvoeFePyIJ7j3ZeTnpq1WyX&X-Amz-Signature=7e02dde7ed58f729e71aca3537996ffe67c45ce9b3ede602c46d73739f2ea4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

