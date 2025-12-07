---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGTVNLH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4ZFxq6Nn6eqkej3JItfSYBmhg7%2BFo3Vl6iJMoY%2FaqFAiA9zPE%2FMQH5Di3QdSSAthix%2FQTn6ga251jH2CyeH4NbyiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo4bp0OBtCZ%2FjMRBCKtwDfSl%2Fi1HO%2BkG%2FBiVuVk3WAwP6K3E89oUK0Y3T4To165CeruUTh3eeUN49D%2FZW7Xv6Fqw5qzFo%2FifhWZTJYffn0yRgSrW5TRMZ1mSRWNJ3L4Bp1tR7qC4MMz6RP8vkUE8s7U0fMU5fkwGfrEMaX00mxbXNSq9x78pkrnU09raS1vyonUCV8VU8k%2BvZzOH4j92qiiFDJPPxO8%2BwsJTXuPI6OtyuyaEuB9VQN5XEriSd6xazgEHL5TVJGb3uKuERClRk2vuYYmNRrwjdnO8HIEaJNsfnU8MtTs1E7UgwTy2Zp3FWVjriQXdqL82U4GSr1Jfd6psw6IP8amB3GoKvxuIdIqk2kWiNzWKCoMWLvQqrCDeGSF3XUJ7xPYtQaOY%2BdOJn7qc3NYcin4UlDM%2B2Q838Mgb%2BFC20MiW5vpM8km0AcpSLyFYZ2cPRtsM8vtWPAvXIcDntM80Is20WNmmu9ysAKZ3UT%2BzaoPe7BIcSvdpWOqiQglKfe9Uh6PqQcLBXmAG68rcykT7N5nOqrFdAIzFgK6QPVq154lAiG00k5YZuSZUSE8SctLT970SeU31OzJmDzO7OKQZhG%2Fks3FfTBLmapsT3P9T%2BR3P6qcmDNMo3dTR0BSPDRRkKknZtS1Ewv4XYyQY6pgFi3y6oMdVo0mJ76HcKX2oQMALS4HncE7g%2Bp9UicT4WTbiaCTiNeW4o%2BezHYaZ9dS0zeIXRKodzpJSV1BuRnp7MTqXAx9rAeRHr17Qfm1dovb%2BKRNcgxXC90ueSU0qqc1ILythdiiy4uFL1iveY8CgbJaNYgpvFrzXJWWQ8J1Zszl7qjxk1efSWzBC3YTjQDHVH54Q93v3YH4%2Fcpzx%2FJXVkBafdcY%2Bh&X-Amz-Signature=65c074af78cd38a1866fe6c817a6416deb3b3eac979e75d1c2a8797f78ee1a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YGTVNLH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4ZFxq6Nn6eqkej3JItfSYBmhg7%2BFo3Vl6iJMoY%2FaqFAiA9zPE%2FMQH5Di3QdSSAthix%2FQTn6ga251jH2CyeH4NbyiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo4bp0OBtCZ%2FjMRBCKtwDfSl%2Fi1HO%2BkG%2FBiVuVk3WAwP6K3E89oUK0Y3T4To165CeruUTh3eeUN49D%2FZW7Xv6Fqw5qzFo%2FifhWZTJYffn0yRgSrW5TRMZ1mSRWNJ3L4Bp1tR7qC4MMz6RP8vkUE8s7U0fMU5fkwGfrEMaX00mxbXNSq9x78pkrnU09raS1vyonUCV8VU8k%2BvZzOH4j92qiiFDJPPxO8%2BwsJTXuPI6OtyuyaEuB9VQN5XEriSd6xazgEHL5TVJGb3uKuERClRk2vuYYmNRrwjdnO8HIEaJNsfnU8MtTs1E7UgwTy2Zp3FWVjriQXdqL82U4GSr1Jfd6psw6IP8amB3GoKvxuIdIqk2kWiNzWKCoMWLvQqrCDeGSF3XUJ7xPYtQaOY%2BdOJn7qc3NYcin4UlDM%2B2Q838Mgb%2BFC20MiW5vpM8km0AcpSLyFYZ2cPRtsM8vtWPAvXIcDntM80Is20WNmmu9ysAKZ3UT%2BzaoPe7BIcSvdpWOqiQglKfe9Uh6PqQcLBXmAG68rcykT7N5nOqrFdAIzFgK6QPVq154lAiG00k5YZuSZUSE8SctLT970SeU31OzJmDzO7OKQZhG%2Fks3FfTBLmapsT3P9T%2BR3P6qcmDNMo3dTR0BSPDRRkKknZtS1Ewv4XYyQY6pgFi3y6oMdVo0mJ76HcKX2oQMALS4HncE7g%2Bp9UicT4WTbiaCTiNeW4o%2BezHYaZ9dS0zeIXRKodzpJSV1BuRnp7MTqXAx9rAeRHr17Qfm1dovb%2BKRNcgxXC90ueSU0qqc1ILythdiiy4uFL1iveY8CgbJaNYgpvFrzXJWWQ8J1Zszl7qjxk1efSWzBC3YTjQDHVH54Q93v3YH4%2Fcpzx%2FJXVkBafdcY%2Bh&X-Amz-Signature=27069f42b6cf338770aec600c013871897027016048453d4e794e49b888d4572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

