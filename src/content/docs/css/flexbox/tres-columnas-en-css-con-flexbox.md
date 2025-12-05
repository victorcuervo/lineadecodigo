---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5ZK3KAB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrAfv16NrwIDjkUyGYm8GgNmTJS2Eiit%2FKW3xbLoFKCAiAbnq9ULVydO%2BcDl3SDtoB0Xx%2FqvzSz2SKRBVb7e4TV%2Byr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMfuznGmheSc%2F3GotCKtwD0ovFIim4%2BNZhA96V50rWH4nOsxWi8kHsrqnKy6YubRSvVfgV87EJsFHrKUgrXHlzMbXtVjyJFmulTALrLi4TxE4Hs1PkH9qPNIbsbeR4wdEjsdTxk8NxC8GqJb6xNG6UJrIUQvfZSY3%2Bc7CQ40oIAPh4dgyYneEIvQKdMKYBNbjLguazPW%2BpziKJf4KuuERixuPvYtFTcvqY5kC782oygI3bGFPWE9eQ6EPAz%2Bp456%2BlOEymZ00Z5kgmhXzDM%2ByKUtNyZnIvqxgBd8RFzlpRs25GfI%2FOIJx2GSA3sAdpu9YgBMfG61DegJll0lN1S8GjuYFHGFVwQevYXowqRGbUVZbbtyRp57qekGRPcQPG0XlZ7YKlN1LhvlhL9mQtYUACjjDdjBt3PJeN6SSVuZ6BH8907wzssYkZa9e42GNqbtw%2BbcMtitGAEFojza30c0V3bjx9g%2FEgBspa7sEuh8IEEJSL5BO83t54RaXPImFBboSIPzyTt338eXs8LslRhmZR4BbxkEyTLVL9UFuWrxxkKV3dsAXmrCIKJ0Mx5hb3QTTZaYIvj6Wjcz16nAyk92NRcwJMUKbIf6aF5V2c2bfT9bYL5CB8xYL2caeyG3qr%2BMaLA8wlKL4k%2FyWm%2BXww9cXNyQY6pgGN7dnpPob9If8vhIi9Wi5GVBIBpfiwUjwsyDUqCl2AN9hY1RlQ%2BM5dXjG%2FCsVPYNmvf4BmlMvzOJJqOfMkzNw2%2FQC%2FebLuqV7dbKWLSZQEU5oFHE%2Fy4wDYH6qHCmRDuTMOUB%2FLDlfy1Orr40737glg7DVxPC%2F51oz%2Bsa2Wsa%2BRGcI6OUgH6WZL4HUNxd0FKZfEpxOK0XgG87c0ih%2FxG9becalUlwBK&X-Amz-Signature=8c253f2fdf04dac77d2c3eef9f1f41202363157db47da1c252a4d5c3db428ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5ZK3KAB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrAfv16NrwIDjkUyGYm8GgNmTJS2Eiit%2FKW3xbLoFKCAiAbnq9ULVydO%2BcDl3SDtoB0Xx%2FqvzSz2SKRBVb7e4TV%2Byr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMfuznGmheSc%2F3GotCKtwD0ovFIim4%2BNZhA96V50rWH4nOsxWi8kHsrqnKy6YubRSvVfgV87EJsFHrKUgrXHlzMbXtVjyJFmulTALrLi4TxE4Hs1PkH9qPNIbsbeR4wdEjsdTxk8NxC8GqJb6xNG6UJrIUQvfZSY3%2Bc7CQ40oIAPh4dgyYneEIvQKdMKYBNbjLguazPW%2BpziKJf4KuuERixuPvYtFTcvqY5kC782oygI3bGFPWE9eQ6EPAz%2Bp456%2BlOEymZ00Z5kgmhXzDM%2ByKUtNyZnIvqxgBd8RFzlpRs25GfI%2FOIJx2GSA3sAdpu9YgBMfG61DegJll0lN1S8GjuYFHGFVwQevYXowqRGbUVZbbtyRp57qekGRPcQPG0XlZ7YKlN1LhvlhL9mQtYUACjjDdjBt3PJeN6SSVuZ6BH8907wzssYkZa9e42GNqbtw%2BbcMtitGAEFojza30c0V3bjx9g%2FEgBspa7sEuh8IEEJSL5BO83t54RaXPImFBboSIPzyTt338eXs8LslRhmZR4BbxkEyTLVL9UFuWrxxkKV3dsAXmrCIKJ0Mx5hb3QTTZaYIvj6Wjcz16nAyk92NRcwJMUKbIf6aF5V2c2bfT9bYL5CB8xYL2caeyG3qr%2BMaLA8wlKL4k%2FyWm%2BXww9cXNyQY6pgGN7dnpPob9If8vhIi9Wi5GVBIBpfiwUjwsyDUqCl2AN9hY1RlQ%2BM5dXjG%2FCsVPYNmvf4BmlMvzOJJqOfMkzNw2%2FQC%2FebLuqV7dbKWLSZQEU5oFHE%2Fy4wDYH6qHCmRDuTMOUB%2FLDlfy1Orr40737glg7DVxPC%2F51oz%2Bsa2Wsa%2BRGcI6OUgH6WZL4HUNxd0FKZfEpxOK0XgG87c0ih%2FxG9becalUlwBK&X-Amz-Signature=79d8c5d696c71467a71127ea33ac9fdc874a550f800bc3a0d1544f1ae298a8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

