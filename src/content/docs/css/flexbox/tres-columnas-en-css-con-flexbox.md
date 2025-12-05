---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJB3Y72%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw44W45Ag1l6vWvvEUpqxsiPK0TFBBdcm4iXsqMX1nggIgV0K8nv%2F4GEGn35g3nFreOzP0cCyQzcATTY4TwhrdXDkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPs9pwxSJJtHfBPR8CrcA3Wia%2B3%2Fh%2BMo90KHs49onXU0ecJiX6Yhb0i5hfm2JkxlbxqvsuZAWlOQ1zmnQrQLXjLedr9%2BYTNLfq%2BP1kKLexv9sqT48bsKSCTfpRH55BFr43iYE3jqpE1FyogHjwLUKE4kOMYt3e3J84aXa%2FPfjHvZZYtXm7N7FZkkLkPLuopSPEmrzha3D2dtOtwtwalOKZqIBOS7chvFgsRuNZtkbKlnkIbeLooKxwcgv3htNk2RHxN8OIjgacaxbtfvmLHlgal7tZ0zxQhD798QpbjZORHPx6%2BuNfH4dBfFZ6WY73KlxMCGV7sFXfSbr5qpYRvXlmWa21kt0YCTFmT3ZtvhbmVrMzuMJZ4BBBe%2BtLIzWp6w5LLiGaMzOGkXJBIuqZX%2Bb3GuhBwJqcC8CA5Tkby7%2BbucaGx%2BBYQisTAYx1QmiCtTg822qWmMwrzxwx4O%2FQ10R79qgHxqlUFYjOXCJrfDS%2B1%2B%2B0PJzLZlbcGCRmDI6Yun%2FB4L4WHWJuroEtDKVFdslViV%2BKlt9GyxuG40O0jVC2Fb9yhuHYGU9m7%2FHEnKfODSY14%2Bcln4olxbSE6WfxmbikbSfMKIlFs%2B5watMqcjzWbGWU2lYD8O0tdPeJnm2SnRozTTv2pLOyw8hBpcMLSuyckGOqUBt4V4PmXchfxbiU6%2FMFWnn79%2FlpB2sl%2F%2BVrdKEueLZPH5GopKaaTyaBxjxPS2DMfEs9qScEFX8PvwSQ%2FMJTn1x%2F6tL09zH9d659pTgnq2g0Z54QXGrCFhIF22KscXEwbg1UN7wqkVbi%2BcRpivbcLCiBnlXyWAGDwbi%2Fwf94DDqQUlWQMKBzSl86Ft%2B4EAp%2BOKzOfMTVKWYjfMUZNgSk8E9MBO0gOK&X-Amz-Signature=1d46a5654b2ab8fb0289777c0a5e54f6297f8cde8d9c3a49257010c0902e94c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJB3Y72%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw44W45Ag1l6vWvvEUpqxsiPK0TFBBdcm4iXsqMX1nggIgV0K8nv%2F4GEGn35g3nFreOzP0cCyQzcATTY4TwhrdXDkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPs9pwxSJJtHfBPR8CrcA3Wia%2B3%2Fh%2BMo90KHs49onXU0ecJiX6Yhb0i5hfm2JkxlbxqvsuZAWlOQ1zmnQrQLXjLedr9%2BYTNLfq%2BP1kKLexv9sqT48bsKSCTfpRH55BFr43iYE3jqpE1FyogHjwLUKE4kOMYt3e3J84aXa%2FPfjHvZZYtXm7N7FZkkLkPLuopSPEmrzha3D2dtOtwtwalOKZqIBOS7chvFgsRuNZtkbKlnkIbeLooKxwcgv3htNk2RHxN8OIjgacaxbtfvmLHlgal7tZ0zxQhD798QpbjZORHPx6%2BuNfH4dBfFZ6WY73KlxMCGV7sFXfSbr5qpYRvXlmWa21kt0YCTFmT3ZtvhbmVrMzuMJZ4BBBe%2BtLIzWp6w5LLiGaMzOGkXJBIuqZX%2Bb3GuhBwJqcC8CA5Tkby7%2BbucaGx%2BBYQisTAYx1QmiCtTg822qWmMwrzxwx4O%2FQ10R79qgHxqlUFYjOXCJrfDS%2B1%2B%2B0PJzLZlbcGCRmDI6Yun%2FB4L4WHWJuroEtDKVFdslViV%2BKlt9GyxuG40O0jVC2Fb9yhuHYGU9m7%2FHEnKfODSY14%2Bcln4olxbSE6WfxmbikbSfMKIlFs%2B5watMqcjzWbGWU2lYD8O0tdPeJnm2SnRozTTv2pLOyw8hBpcMLSuyckGOqUBt4V4PmXchfxbiU6%2FMFWnn79%2FlpB2sl%2F%2BVrdKEueLZPH5GopKaaTyaBxjxPS2DMfEs9qScEFX8PvwSQ%2FMJTn1x%2F6tL09zH9d659pTgnq2g0Z54QXGrCFhIF22KscXEwbg1UN7wqkVbi%2BcRpivbcLCiBnlXyWAGDwbi%2Fwf94DDqQUlWQMKBzSl86Ft%2B4EAp%2BOKzOfMTVKWYjfMUZNgSk8E9MBO0gOK&X-Amz-Signature=28953ce15dd8ceee198faafcd4b5b6bd105fd44f51a431a535698d3f3efd00c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

