---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMCM6JW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClbGCWV9N8dpEfREbkVyz81l8brDjzdeMpFu8dvyNl8AiEAvigVZR1mbAYtVPg3kYYgS5kw2ae1MiFIqBpGjPpV11gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBRcZvHurKfDvhc%2FfCrcA2wyy1joOhDsVmyb2BfrR2wuaRliAELMCObFnuqeXBwhxT0HZ5YKoqWCRagQGCZlp8LZBOM2wFUWqGjlCXpEtERf5fnLhnZGoshNta6%2BNh%2BmEqUKwl9hS9%2Bd1HbHtX5rx7Kj1q7Tq3fx%2FoYgH5MUJuLekscDgtQEOWXzx17gs0o67B8XQs1azL%2FSojSdMkY%2Bj33DnN0zfTfCiDQfgRSmY1uAUj11%2B3l2pHrnLW1ghK%2FY24ZfCHAldApbrYcUely02FC7ggWlTKnM6kHAM92A0xl8PHfW4RXmSlBAP5rwSretUJWrlffdpdXpu662bwaebmxTdPSFcU1yrKdF0g5gyxqwzCU%2BIexVwY9twtmJifnw7bkE42DYoBp9vQ%2FQ5DZTSFBbn1Q2WY7LZEq7RbAg5C0bwI%2Fv2OiXdrjqYF8aWVdxgr21t%2B1KiM0remnZs2ZGx0q2HBIMz1qF8f8xWe8sY3WGV%2F8PffQUF7fNQ4cj3HuDoc3sz2TfjHizPuh%2BPjgxkzxMNCgJVC5G0Rt19Vl0XcLnH%2FYkSY%2F6UHKSclr%2F%2BfA2KXKVIE4BXnMrTQflXEJAgA2Xwh%2FUhPBcksns0lYfo1sMZHk2WozelLzRivRGm8zMLluLW9w%2FutirNM2iMMqyyckGOqUBm0KDZaN7SfujYsnr8EISUhIlhMy0wzW%2FiJ6FRxcu9in63McatXeB6UGyoLD7jxspDFwSrVgJuNAtTkxFc6kWavwkxwQa0DJnS%2ByY5ObW8Gi%2FGFAPunsAjE7oKGx%2Fe0lc5DVhaiNZrNGP8Ae3VGotxuvFttX%2B5Pevx2voqNaAgti4OIKcJApHRxJmUGeoSIYN7JqIvImmHKoHCdaDgaJUk7Ph1DCY&X-Amz-Signature=d60dd03bdcd159618d1dfe6fed28c2bf2964431e86cb1fdf8aeb5d79c7033534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GMCM6JW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClbGCWV9N8dpEfREbkVyz81l8brDjzdeMpFu8dvyNl8AiEAvigVZR1mbAYtVPg3kYYgS5kw2ae1MiFIqBpGjPpV11gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBRcZvHurKfDvhc%2FfCrcA2wyy1joOhDsVmyb2BfrR2wuaRliAELMCObFnuqeXBwhxT0HZ5YKoqWCRagQGCZlp8LZBOM2wFUWqGjlCXpEtERf5fnLhnZGoshNta6%2BNh%2BmEqUKwl9hS9%2Bd1HbHtX5rx7Kj1q7Tq3fx%2FoYgH5MUJuLekscDgtQEOWXzx17gs0o67B8XQs1azL%2FSojSdMkY%2Bj33DnN0zfTfCiDQfgRSmY1uAUj11%2B3l2pHrnLW1ghK%2FY24ZfCHAldApbrYcUely02FC7ggWlTKnM6kHAM92A0xl8PHfW4RXmSlBAP5rwSretUJWrlffdpdXpu662bwaebmxTdPSFcU1yrKdF0g5gyxqwzCU%2BIexVwY9twtmJifnw7bkE42DYoBp9vQ%2FQ5DZTSFBbn1Q2WY7LZEq7RbAg5C0bwI%2Fv2OiXdrjqYF8aWVdxgr21t%2B1KiM0remnZs2ZGx0q2HBIMz1qF8f8xWe8sY3WGV%2F8PffQUF7fNQ4cj3HuDoc3sz2TfjHizPuh%2BPjgxkzxMNCgJVC5G0Rt19Vl0XcLnH%2FYkSY%2F6UHKSclr%2F%2BfA2KXKVIE4BXnMrTQflXEJAgA2Xwh%2FUhPBcksns0lYfo1sMZHk2WozelLzRivRGm8zMLluLW9w%2FutirNM2iMMqyyckGOqUBm0KDZaN7SfujYsnr8EISUhIlhMy0wzW%2FiJ6FRxcu9in63McatXeB6UGyoLD7jxspDFwSrVgJuNAtTkxFc6kWavwkxwQa0DJnS%2ByY5ObW8Gi%2FGFAPunsAjE7oKGx%2Fe0lc5DVhaiNZrNGP8Ae3VGotxuvFttX%2B5Pevx2voqNaAgti4OIKcJApHRxJmUGeoSIYN7JqIvImmHKoHCdaDgaJUk7Ph1DCY&X-Amz-Signature=356e77e24cebdae1d29a1b8737d42017b2a680c954166001e378a88cfbbf3824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

