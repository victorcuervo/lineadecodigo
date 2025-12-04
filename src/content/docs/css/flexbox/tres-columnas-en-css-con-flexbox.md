---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWWYLOL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDw8eozVi%2Bcmek8xid41DHDcuyaUeu%2ByQ5nxi9bT1A2jAiEA%2FlyccaKn%2FgT%2B0Nmh89HkjMnRjfeZlo6MsQseV4acGY8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDF%2FAthq77VvQwz6jSrcA1QD8nrNXzaea%2FW%2F2tv1E1n5qlMYY56yIdYMUzZDAOUSQ0OIXkKaRRFn7ApUVrAdiL0NHmaQUOgxn4L39LYiwzegWMrUV2WBOAPgk5vNKNqALX%2Fq4Tn77U55wOXNN8iRwqv8PVzNCByHfmjhPrthzNu1tRVXr61moSCeJMGFdMT%2B%2FFY5Euqm46Dx2o%2FrAJ6pVyFfUTQP29hrNFw6Gi2I7%2BM2IgLoCuqmXzq8uM0phObKRDZn3Eh2op%2Bm8DO8a9yrORi7WJyDWKAdjXQdbjOnCHwv2jW0WJCUB%2BZZhgGpLO%2Ff3agN3jG868Kl2mBhy%2BteHDAnQbBl4JTTlMaW2ozOphC59teE9Q3wTBmkwrWcpEP%2F1hfiRwHW75PJz7AxlwWG7uOJGmPhyqQUf4TrvGGPzQxt0rtpEpKIMcZHhiHRgWtNQMbZtTuIWTaP1zvOgeFn3eifi27h%2BhNxO4%2FUX3yWHfPiVJx7hHOx0xQW7LQqRmjHQWWzTOm1tGZ3sJkRrsJlOx4lpQ717TUZxUZgsns3lfprJtmfXYJ7joicrQR4RW9GyTZ0fCw%2BpKSdCm%2FOSSvHc0%2B2djhGZ8HuaylmmUG5ullMP00qSSgBNFibx1SixYP%2BXI7T2ESXEgfAcBPKMIGVw8kGOqUBD3uzea5NqK5mkZU1X0erVFgRU%2BvHR6JvZlIPq5U9i6rIL3BX6%2BgOwD5okIG3IB8nBqC%2F9qlDywzVlfat8YwBwaXHPfaFCGDsV4becGh3Fcgbepkjfgke83AiWXENxxbZhpbpPE%2BNNalwbwSlX8Fe4VMzmgfoXhaUs19saYzJxfz84xAtUzbFYVCGlY%2FG4ThR%2FUN8J6mi60j%2B4bm%2FJraF8AkoJrQu&X-Amz-Signature=8d2c7c120496a6d737c923ff3283a026072b3b8512f5d691816f0f5713f7a71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWWYLOL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDw8eozVi%2Bcmek8xid41DHDcuyaUeu%2ByQ5nxi9bT1A2jAiEA%2FlyccaKn%2FgT%2B0Nmh89HkjMnRjfeZlo6MsQseV4acGY8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDF%2FAthq77VvQwz6jSrcA1QD8nrNXzaea%2FW%2F2tv1E1n5qlMYY56yIdYMUzZDAOUSQ0OIXkKaRRFn7ApUVrAdiL0NHmaQUOgxn4L39LYiwzegWMrUV2WBOAPgk5vNKNqALX%2Fq4Tn77U55wOXNN8iRwqv8PVzNCByHfmjhPrthzNu1tRVXr61moSCeJMGFdMT%2B%2FFY5Euqm46Dx2o%2FrAJ6pVyFfUTQP29hrNFw6Gi2I7%2BM2IgLoCuqmXzq8uM0phObKRDZn3Eh2op%2Bm8DO8a9yrORi7WJyDWKAdjXQdbjOnCHwv2jW0WJCUB%2BZZhgGpLO%2Ff3agN3jG868Kl2mBhy%2BteHDAnQbBl4JTTlMaW2ozOphC59teE9Q3wTBmkwrWcpEP%2F1hfiRwHW75PJz7AxlwWG7uOJGmPhyqQUf4TrvGGPzQxt0rtpEpKIMcZHhiHRgWtNQMbZtTuIWTaP1zvOgeFn3eifi27h%2BhNxO4%2FUX3yWHfPiVJx7hHOx0xQW7LQqRmjHQWWzTOm1tGZ3sJkRrsJlOx4lpQ717TUZxUZgsns3lfprJtmfXYJ7joicrQR4RW9GyTZ0fCw%2BpKSdCm%2FOSSvHc0%2B2djhGZ8HuaylmmUG5ullMP00qSSgBNFibx1SixYP%2BXI7T2ESXEgfAcBPKMIGVw8kGOqUBD3uzea5NqK5mkZU1X0erVFgRU%2BvHR6JvZlIPq5U9i6rIL3BX6%2BgOwD5okIG3IB8nBqC%2F9qlDywzVlfat8YwBwaXHPfaFCGDsV4becGh3Fcgbepkjfgke83AiWXENxxbZhpbpPE%2BNNalwbwSlX8Fe4VMzmgfoXhaUs19saYzJxfz84xAtUzbFYVCGlY%2FG4ThR%2FUN8J6mi60j%2B4bm%2FJraF8AkoJrQu&X-Amz-Signature=bc7fafa0306cb9884643b4c7c2033e0a6f2930865d2e37483ddb6e8ccf50e943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

