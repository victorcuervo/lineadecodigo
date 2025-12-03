---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZNL5HA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCOddfF%2BRq1KkMXnGCgey1XwcMuK1wJXpFUBnokn%2Fq5kQIgbAxL4E9HJZrfknerAvPrwZaw2hwt2zE2%2BnHEkSaTm64q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI0aBOXNxasCpYA7JCrcA9ip4a0hu9ln5ejvRQkF%2FzRKfSIiStAgG5jgk8GEw4mNQzQTF82MuliRSPNb7FyTtzE94DO2GD0%2B0%2FQs5hHqnCSRJlJBp7XMhcanbg%2F1wx%2BprlbUdRZgD5H1LmB08DSHTyVeDgOSVa%2BXzCv%2BQdAHa5vaAVRKE8sAe9wz1MbEUrjHDi2hqzPD8awu2oLpuNU9AWYDhrGsvnsz%2Bj9IVb7Qc41pnW5jV%2FQ9%2BQGE9dMc1kmtL63jJWkdsxGimUN8EmJp%2FdN3cUzeM8uP6Fu6CYq0KBLrEjylai8A2S6YQVBCsPpyHJj0OQTE%2BpOJaEKS%2F53erWbbmMxhV10VtgJmlwgMATf1p1QR%2BHlph3%2Bbaqm%2FBUkfN6ABvpL6o7v663WA%2BJE05yZgyCUaxwp7Fl3mm7aUNyugPqSSYFhQ1lET6Afvq6AmT1Y6flT6%2BkcBDEuI7DIFm9w3a%2BsvNm4CyEfg2kdK8Abio7Obn2Q80Kk6kk61IRr1ES8s6Jg7wGVS5t%2FkXMeblB3Ast1JMRYM5yu96ghE96WxrRCzC8vKDVS%2F2M6dR4mvExShrDyHQJGSTjUy%2FHJN%2F3oZ8a58MB2kK3LQ8lOp8BjENPESa6AheT8LddshtBZy8QtShL0P%2FFaj1enjMLu9wskGOqUBHwadsTcyBK%2BydtV0Z35nUi3BbOTJXfescSjA7KCg0HmJCdR%2BziXQxAEfNriY%2B26NNnnERkCc19xXT9bgWK8uRlNEBiBq0BPOTqY2%2F0AknXPMMXE%2FVfJ8MN0tQRSzfi6ZfzFHG2vwVAHf4jIWUBHSXSrb4k9O2BDG7ezDq7aXUGTF1krkf3Dj%2ByO%2FDLed0FRsfdTkmpFBlzdFCz%2BljzF2aCTq26i3&X-Amz-Signature=3eec2bd120123f18d8c9637d25ce0ef0736c52b073b741568dae82790e351866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZNL5HA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCOddfF%2BRq1KkMXnGCgey1XwcMuK1wJXpFUBnokn%2Fq5kQIgbAxL4E9HJZrfknerAvPrwZaw2hwt2zE2%2BnHEkSaTm64q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI0aBOXNxasCpYA7JCrcA9ip4a0hu9ln5ejvRQkF%2FzRKfSIiStAgG5jgk8GEw4mNQzQTF82MuliRSPNb7FyTtzE94DO2GD0%2B0%2FQs5hHqnCSRJlJBp7XMhcanbg%2F1wx%2BprlbUdRZgD5H1LmB08DSHTyVeDgOSVa%2BXzCv%2BQdAHa5vaAVRKE8sAe9wz1MbEUrjHDi2hqzPD8awu2oLpuNU9AWYDhrGsvnsz%2Bj9IVb7Qc41pnW5jV%2FQ9%2BQGE9dMc1kmtL63jJWkdsxGimUN8EmJp%2FdN3cUzeM8uP6Fu6CYq0KBLrEjylai8A2S6YQVBCsPpyHJj0OQTE%2BpOJaEKS%2F53erWbbmMxhV10VtgJmlwgMATf1p1QR%2BHlph3%2Bbaqm%2FBUkfN6ABvpL6o7v663WA%2BJE05yZgyCUaxwp7Fl3mm7aUNyugPqSSYFhQ1lET6Afvq6AmT1Y6flT6%2BkcBDEuI7DIFm9w3a%2BsvNm4CyEfg2kdK8Abio7Obn2Q80Kk6kk61IRr1ES8s6Jg7wGVS5t%2FkXMeblB3Ast1JMRYM5yu96ghE96WxrRCzC8vKDVS%2F2M6dR4mvExShrDyHQJGSTjUy%2FHJN%2F3oZ8a58MB2kK3LQ8lOp8BjENPESa6AheT8LddshtBZy8QtShL0P%2FFaj1enjMLu9wskGOqUBHwadsTcyBK%2BydtV0Z35nUi3BbOTJXfescSjA7KCg0HmJCdR%2BziXQxAEfNriY%2B26NNnnERkCc19xXT9bgWK8uRlNEBiBq0BPOTqY2%2F0AknXPMMXE%2FVfJ8MN0tQRSzfi6ZfzFHG2vwVAHf4jIWUBHSXSrb4k9O2BDG7ezDq7aXUGTF1krkf3Dj%2ByO%2FDLed0FRsfdTkmpFBlzdFCz%2BljzF2aCTq26i3&X-Amz-Signature=78c1a6ece811850c43acef29575d50f5675ad84cefefba7eed6fd6152b32ff6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

