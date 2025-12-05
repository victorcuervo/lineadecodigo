---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNEBXE4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXFPWO0Hh6yfzL%2BCX5qQuDbyRiXOwJwHwJ6CdpPL9oAAiAe0bY1BhwQlMZDKip6QoD94TqhA7Zgm1gF8VhLRAnx2Cr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMzC78Jl0NE16CYUZaKtwDD5Ntytmiq4NVqUISh7EzIYtrarpuQA1PRejxmeVchv4pZtK1P2nmIhDTdRdgIeJ%2BHwK3xXOacz9idYePWPUEp2s66aK70r4xbRsbKpCAmxdLZlnlZr55TFddlN1zfRuuBycUL4Czcu7hBF1rqoUAzpo3l%2FUjuGIxWYymdsKZLiUqPWai6RLTrqnwlWlYXsTeSqSR4u7QgBgpjiPt92Zhx5QMhE2n9MGdgVzw4cl9mdJ73NgMNTzYu3C1O621qweM0PcPNOF9YjeWGSITcDUK3BemWSoU9cs7Pl4ba2yBdp7P7dqT2y5kdZLrcsWIOSIb%2BSx2eqSt5cMmCZvtZdtOM3KM3U%2FmofHw1MhGBFBqPd4%2FzQzZrwijGniaBilp6P%2FV3BRDpZPNnLoPhlp9ETM8mqvZxTP4souROgchY8%2FLRyvvBQ0DaoTNwsKaagHdNYykUQLy9lNbD%2Bk1lyEz3XToMM1F%2BBDcuMGSg9ZseY5TycOvbGBGG14jqkcF1jS8LAbwI%2FLXqndMTh1ku93D3UEFRiSH9mSgcoK4gWeLA9mO4cNgznRQiZFziZmgaZ8Lzp7RaL8eRX4t3lVEInwgGK006s%2FHTPY4M6HcJQLOrzoSlkLtsv6z%2BMw4yduK%2ByowufDLyQY6pgEoh%2B4HSU90JwOFNPSltEc6F2M48dp%2BkpZI%2BGxmoIZSbmi%2BCt4qOGTyxzJHvnAEyy5WMmHlFNsmklbaTbMQiE%2FS1IuX%2BTo04wUSbk%2FjdxjQb6ffBpgOxmlGCUTEP8DXViAJnj3F7oUjVlYBoPFUo6VaIzJuZsPvfWllz%2B6g4%2Bnf%2F0x%2FiYbz%2F8BjYQiikvwu834AoaU2obzq9LRwLfLeDRkTvd7UbgNJ&X-Amz-Signature=cef89376ee02eefa3e3329edcdbf1d2ffef72c33a22062f444f8e83952c9d6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNEBXE4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXFPWO0Hh6yfzL%2BCX5qQuDbyRiXOwJwHwJ6CdpPL9oAAiAe0bY1BhwQlMZDKip6QoD94TqhA7Zgm1gF8VhLRAnx2Cr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMzC78Jl0NE16CYUZaKtwDD5Ntytmiq4NVqUISh7EzIYtrarpuQA1PRejxmeVchv4pZtK1P2nmIhDTdRdgIeJ%2BHwK3xXOacz9idYePWPUEp2s66aK70r4xbRsbKpCAmxdLZlnlZr55TFddlN1zfRuuBycUL4Czcu7hBF1rqoUAzpo3l%2FUjuGIxWYymdsKZLiUqPWai6RLTrqnwlWlYXsTeSqSR4u7QgBgpjiPt92Zhx5QMhE2n9MGdgVzw4cl9mdJ73NgMNTzYu3C1O621qweM0PcPNOF9YjeWGSITcDUK3BemWSoU9cs7Pl4ba2yBdp7P7dqT2y5kdZLrcsWIOSIb%2BSx2eqSt5cMmCZvtZdtOM3KM3U%2FmofHw1MhGBFBqPd4%2FzQzZrwijGniaBilp6P%2FV3BRDpZPNnLoPhlp9ETM8mqvZxTP4souROgchY8%2FLRyvvBQ0DaoTNwsKaagHdNYykUQLy9lNbD%2Bk1lyEz3XToMM1F%2BBDcuMGSg9ZseY5TycOvbGBGG14jqkcF1jS8LAbwI%2FLXqndMTh1ku93D3UEFRiSH9mSgcoK4gWeLA9mO4cNgznRQiZFziZmgaZ8Lzp7RaL8eRX4t3lVEInwgGK006s%2FHTPY4M6HcJQLOrzoSlkLtsv6z%2BMw4yduK%2ByowufDLyQY6pgEoh%2B4HSU90JwOFNPSltEc6F2M48dp%2BkpZI%2BGxmoIZSbmi%2BCt4qOGTyxzJHvnAEyy5WMmHlFNsmklbaTbMQiE%2FS1IuX%2BTo04wUSbk%2FjdxjQb6ffBpgOxmlGCUTEP8DXViAJnj3F7oUjVlYBoPFUo6VaIzJuZsPvfWllz%2B6g4%2Bnf%2F0x%2FiYbz%2F8BjYQiikvwu834AoaU2obzq9LRwLfLeDRkTvd7UbgNJ&X-Amz-Signature=0fbd66177c59c913bf77be3c4fe83644c5c8d722e8124117fdd7b456d2e35205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

