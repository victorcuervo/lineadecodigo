---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZA35S3V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBN5fe%2F%2ByYmvf%2F92Kg8%2BMb%2BwLIjsVkLvk2x%2F%2BgVmH5NwIhANlIDsFwh6O%2BG8wGVDi0%2B8pvEFBv4LwF%2BV7rAg%2BeEqVeKv8DCFsQABoMNjM3NDIzMTgzODA1IgzpDmAPhLG%2BaygYPtUq3AP0j%2Fn5%2FuezT4ZilD7Jcg2rn4FcR0KWQTZtzz%2BoZhRiDobLaVsqijrMheqBwMgxrKdxg24oYTngAZSodzy89rUIEc5xamIdIxLGwU2sek0X1LGQS9wrbjBeOo8L9SnSs4x%2BmeYY6v%2FhmTozuKJ0kB2n%2BNGLf9jjKG%2BMiHcT%2FAfBUuwXa77eLKRO%2Brt38AwhHrFvq08tu0WkEL3RtJKSWx9fmzhac1kFo%2BKTWlTeacO7OKHAxxtc%2B84I6vRvbPrZdSJWFqJM4Hym5MaiFLoM%2FM8%2Bl5GGilvfY6fqZpkJJmGICsnro%2BUUajV%2FE7SJv6DyGYgoJMh0hJPkN3nKy%2FqIOP5wMNP1frDOdpWZysVvt2msJ1BiybACsx7PvdwqJIpexZX7BitTCKznmypAF%2FOrlLUWEi%2Fj0BUF9Nl3UQtlZ6iGPZFgp9SetuSMj1cvTtR4VUalerFZ3LwNn6jz8wJWFC73nh9hKwDrjRxDCxf%2BlaKYKujmhpqXepeWD2Y9F7v%2FWtXH63%2Ba%2FxXsopaGpHe92pQP4i4SEMyjZ%2FQDTznwezm4gfp5Im7O6rzWtzj2f6sm2elGQLDoxGnMZaiH1FEpuxvK70NlK1I7atQsPgK4HIv7zoUnRyQwud4IXfw5cTCO2MrJBjqkAQzhiFtweGhRaxya0x81P5NfS4a1O8JqiP%2BApXxFJkQSXwoctQdf%2BPyEhMoRopGVjj2B1sYGz7X8lRi%2BFnxav1E3%2FTaO%2F%2BBQyRuLl3dlwYIB8dTT1pY672ZPXrb%2BGcwpCZiosi4PQv173PA1gUu9jjmAu22%2Bpe%2F97y5gs66kQfhjwnGIEm3P0gPX3p%2Buf9hiyUop2SYrYP8l%2BjNgb2UB4dOIIdER&X-Amz-Signature=a0044b9e9fdc522b609d86e9bac4119fc39db1124ee23680327919e2d31e90cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZA35S3V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBN5fe%2F%2ByYmvf%2F92Kg8%2BMb%2BwLIjsVkLvk2x%2F%2BgVmH5NwIhANlIDsFwh6O%2BG8wGVDi0%2B8pvEFBv4LwF%2BV7rAg%2BeEqVeKv8DCFsQABoMNjM3NDIzMTgzODA1IgzpDmAPhLG%2BaygYPtUq3AP0j%2Fn5%2FuezT4ZilD7Jcg2rn4FcR0KWQTZtzz%2BoZhRiDobLaVsqijrMheqBwMgxrKdxg24oYTngAZSodzy89rUIEc5xamIdIxLGwU2sek0X1LGQS9wrbjBeOo8L9SnSs4x%2BmeYY6v%2FhmTozuKJ0kB2n%2BNGLf9jjKG%2BMiHcT%2FAfBUuwXa77eLKRO%2Brt38AwhHrFvq08tu0WkEL3RtJKSWx9fmzhac1kFo%2BKTWlTeacO7OKHAxxtc%2B84I6vRvbPrZdSJWFqJM4Hym5MaiFLoM%2FM8%2Bl5GGilvfY6fqZpkJJmGICsnro%2BUUajV%2FE7SJv6DyGYgoJMh0hJPkN3nKy%2FqIOP5wMNP1frDOdpWZysVvt2msJ1BiybACsx7PvdwqJIpexZX7BitTCKznmypAF%2FOrlLUWEi%2Fj0BUF9Nl3UQtlZ6iGPZFgp9SetuSMj1cvTtR4VUalerFZ3LwNn6jz8wJWFC73nh9hKwDrjRxDCxf%2BlaKYKujmhpqXepeWD2Y9F7v%2FWtXH63%2Ba%2FxXsopaGpHe92pQP4i4SEMyjZ%2FQDTznwezm4gfp5Im7O6rzWtzj2f6sm2elGQLDoxGnMZaiH1FEpuxvK70NlK1I7atQsPgK4HIv7zoUnRyQwud4IXfw5cTCO2MrJBjqkAQzhiFtweGhRaxya0x81P5NfS4a1O8JqiP%2BApXxFJkQSXwoctQdf%2BPyEhMoRopGVjj2B1sYGz7X8lRi%2BFnxav1E3%2FTaO%2F%2BBQyRuLl3dlwYIB8dTT1pY672ZPXrb%2BGcwpCZiosi4PQv173PA1gUu9jjmAu22%2Bpe%2F97y5gs66kQfhjwnGIEm3P0gPX3p%2Buf9hiyUop2SYrYP8l%2BjNgb2UB4dOIIdER&X-Amz-Signature=c80e723c1d303b0da8a32ecedd2ba18ebeb80c0a1ce250ed8d0695d4d72618b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

