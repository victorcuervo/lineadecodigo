---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJTSLMI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRxdwBG4MW8pKgJxHNM%2Fe9ndOZX9fD7%2FF7gcB2x65CpAIgNSM2FTqPxOtSTfaZuV%2F0byGMfdDtM1BtrdHmoaFHQAsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZzVQoiM2wO2cXkgSrcA02MFAFzXbYXBK9ywJs%2FiwU%2FqNy%2BVq9zwZCexOIM8HOqMlgEGlhbitArv%2BmVcKCAbGtn%2F%2B2Bn5m7DGC8fmU8dL3EfieeDCqGRYvUOVr9Wk8cUIBLiSufjAadO03OIj3dlgxKwY%2BZLCf0sSWT9kiEP3T7swyd%2FgVgG0N69YWeY0Mw5rT1EckbmV%2Fxk7b%2Fwi1BxjKquvW6OWcjqzK5CRAi%2FyBzltssncli%2F4haRoRsNfAct%2BsnX1CN2FJXW%2FX%2FxfNdA251ON%2BeohHnnXiAek4nOERjQY9G1F44t5j8bRtqRETv%2BZxjgUSfXXLwH8n06kRhXB4VsTdEVAExnuW7cnDoFOXVxG6jYLXUL%2Bts4eK7S%2BXljQ8btGOAq6Wuoe0YNQJ%2FmurzOLs1JsIxC7DdCVYTb8xDO6WwlnWjzCPZHiuegVVTwQ7VTuf%2B4Am%2Frsiko7d9pGGcyI0KqMF7ouF8c7kG0KpfDRKzzhvdvtWtVRGJiLA4CLbXNZh%2F7SUSMJa1UnxqB2azmD93ad%2F7r4%2BFk%2BG08ZENFcuyloJAyGxp2KqYeQcixQObg2KfvzdeUttzvUSjNWWyuEohi9OLDJ2e1i%2B%2Bp1E%2Bc4YOjlGXxIp6S4dL1vRb%2BxZB5I%2FOGcufhY0GMMS41skGOqUBB4ZiJEhMtrGS%2BWlgWKHl1N4URkh7xqwLoI3uUsYJBGqlMyeFDx31oDZlMZ8zHy%2Fw14dzP%2Fz2reAcDbrEjfR1lhgzHGj8kcNWiNpeen6SPsUvr6Xu8febZblG%2BO9sIm5Od8Wa6qza1%2FxI6JNM%2FiVnkNMjNQ6IAxcgFjtkk4952j%2Fg8xGusa%2BmoLVLr%2B064%2BZCB1AGFccK1ZzukNLVI5QdLayj5w7y&X-Amz-Signature=46de2470555ea588a106b54458f968f4283de33113fb3ef7874301a6438d151e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJTSLMI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRxdwBG4MW8pKgJxHNM%2Fe9ndOZX9fD7%2FF7gcB2x65CpAIgNSM2FTqPxOtSTfaZuV%2F0byGMfdDtM1BtrdHmoaFHQAsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZzVQoiM2wO2cXkgSrcA02MFAFzXbYXBK9ywJs%2FiwU%2FqNy%2BVq9zwZCexOIM8HOqMlgEGlhbitArv%2BmVcKCAbGtn%2F%2B2Bn5m7DGC8fmU8dL3EfieeDCqGRYvUOVr9Wk8cUIBLiSufjAadO03OIj3dlgxKwY%2BZLCf0sSWT9kiEP3T7swyd%2FgVgG0N69YWeY0Mw5rT1EckbmV%2Fxk7b%2Fwi1BxjKquvW6OWcjqzK5CRAi%2FyBzltssncli%2F4haRoRsNfAct%2BsnX1CN2FJXW%2FX%2FxfNdA251ON%2BeohHnnXiAek4nOERjQY9G1F44t5j8bRtqRETv%2BZxjgUSfXXLwH8n06kRhXB4VsTdEVAExnuW7cnDoFOXVxG6jYLXUL%2Bts4eK7S%2BXljQ8btGOAq6Wuoe0YNQJ%2FmurzOLs1JsIxC7DdCVYTb8xDO6WwlnWjzCPZHiuegVVTwQ7VTuf%2B4Am%2Frsiko7d9pGGcyI0KqMF7ouF8c7kG0KpfDRKzzhvdvtWtVRGJiLA4CLbXNZh%2F7SUSMJa1UnxqB2azmD93ad%2F7r4%2BFk%2BG08ZENFcuyloJAyGxp2KqYeQcixQObg2KfvzdeUttzvUSjNWWyuEohi9OLDJ2e1i%2B%2Bp1E%2Bc4YOjlGXxIp6S4dL1vRb%2BxZB5I%2FOGcufhY0GMMS41skGOqUBB4ZiJEhMtrGS%2BWlgWKHl1N4URkh7xqwLoI3uUsYJBGqlMyeFDx31oDZlMZ8zHy%2Fw14dzP%2Fz2reAcDbrEjfR1lhgzHGj8kcNWiNpeen6SPsUvr6Xu8febZblG%2BO9sIm5Od8Wa6qza1%2FxI6JNM%2FiVnkNMjNQ6IAxcgFjtkk4952j%2Fg8xGusa%2BmoLVLr%2B064%2BZCB1AGFccK1ZzukNLVI5QdLayj5w7y&X-Amz-Signature=1eb5d94679f703f973f670f801d10388d891a8a356f10b516f96f71ac8c9bcad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

