---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JD4AVNA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5djizFxUb2eDOenZHznkYeevWSe27GJKJUzUHD0h0mAiEA1WwZgU0%2BCG24OZXBvGsaiLCWlf1P2CxO5l887j%2FpcPoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcqAaLD5%2BA6k075PSrcA4DJC2q67kl1BQqB8soR7Y83rcuybJviYLtYuZZIVN%2B5E4MlOvANT1z7v%2FcGuPbaBq%2FqaIBW7QiWYrKRNnjCxoQSGvuX7Ks7mrCQUTsRP%2FjS4xRwxc%2BIOOMqJIydlTrnw4pBIeSRbCyMbI6I2RZR25XWiOpTRbCoYjrJj3Y7JB%2Fi43n%2F7yT9wk5os8qz%2Bif8RvXrvml7Rgi3Sw%2BjHahguB%2BPHF3rMniULl9bVGLu3XGzjl6gF6%2F2HSl2aRuH5lq5NVPsg1trNhW9d6zIZ6cUBmBLhydUqQZ%2FEn8wkVW4UsftiFEBUcap9LIIOaLci7FNNeLF1i9ZnW%2F%2FmEgVzmFsz2BBbesGMY0KBZVIUKBvVYoATyXmCE6px4qi0687hlyXeuCeaiHizQnQmGtNep1M0ni80WJqW7ehIxLt3713C93TWUn66UTlUW%2BGx%2Fl8%2F5wfCNYJ7tQt9TU1Ph%2B8XyyJ7F8aqr3qLe5fdjwhsGXGO%2BoeILXIQHl0JxSKqPD0b6AjyJRfLh4wIcjmKdlfB1bjH%2FtO0D7jizDx1Y82iTIwtukT4STjv%2FTMglm7Jq%2FPbJ89F6gjz9Zxrp7h%2BGkciKOt%2Fb7YIDERtAgyk1Q7gupIJKSMmQjFCnGANweuNzv9MLzE38kGOqUBfWhSkrijxO8LX8t1c0OiLTjdoHkR%2BgKK72Q3JKY5YqWzSaKVK7W3OLMk57OZSO2xT9wjg2%2FL5kDafeKdKxIu6xjV3RXWT1VMQsnjK6YacyshTuYFREwv0%2BIpMzIWuNlsy64eBqK3yQX2g0KKG1v%2FSaC8rb%2BE%2FMoCcei8ewYXWhHWAAj81E9x%2FAtl8LkeS5FH0o%2BbLDBpNVNOgpfGsgsL2L140g6m&X-Amz-Signature=8fe3a205267162e4bb8eb8c4c3652dd551cf143a952fe845338e6d09479e4a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JD4AVNA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5djizFxUb2eDOenZHznkYeevWSe27GJKJUzUHD0h0mAiEA1WwZgU0%2BCG24OZXBvGsaiLCWlf1P2CxO5l887j%2FpcPoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcqAaLD5%2BA6k075PSrcA4DJC2q67kl1BQqB8soR7Y83rcuybJviYLtYuZZIVN%2B5E4MlOvANT1z7v%2FcGuPbaBq%2FqaIBW7QiWYrKRNnjCxoQSGvuX7Ks7mrCQUTsRP%2FjS4xRwxc%2BIOOMqJIydlTrnw4pBIeSRbCyMbI6I2RZR25XWiOpTRbCoYjrJj3Y7JB%2Fi43n%2F7yT9wk5os8qz%2Bif8RvXrvml7Rgi3Sw%2BjHahguB%2BPHF3rMniULl9bVGLu3XGzjl6gF6%2F2HSl2aRuH5lq5NVPsg1trNhW9d6zIZ6cUBmBLhydUqQZ%2FEn8wkVW4UsftiFEBUcap9LIIOaLci7FNNeLF1i9ZnW%2F%2FmEgVzmFsz2BBbesGMY0KBZVIUKBvVYoATyXmCE6px4qi0687hlyXeuCeaiHizQnQmGtNep1M0ni80WJqW7ehIxLt3713C93TWUn66UTlUW%2BGx%2Fl8%2F5wfCNYJ7tQt9TU1Ph%2B8XyyJ7F8aqr3qLe5fdjwhsGXGO%2BoeILXIQHl0JxSKqPD0b6AjyJRfLh4wIcjmKdlfB1bjH%2FtO0D7jizDx1Y82iTIwtukT4STjv%2FTMglm7Jq%2FPbJ89F6gjz9Zxrp7h%2BGkciKOt%2Fb7YIDERtAgyk1Q7gupIJKSMmQjFCnGANweuNzv9MLzE38kGOqUBfWhSkrijxO8LX8t1c0OiLTjdoHkR%2BgKK72Q3JKY5YqWzSaKVK7W3OLMk57OZSO2xT9wjg2%2FL5kDafeKdKxIu6xjV3RXWT1VMQsnjK6YacyshTuYFREwv0%2BIpMzIWuNlsy64eBqK3yQX2g0KKG1v%2FSaC8rb%2BE%2FMoCcei8ewYXWhHWAAj81E9x%2FAtl8LkeS5FH0o%2BbLDBpNVNOgpfGsgsL2L140g6m&X-Amz-Signature=4e7f9de9d1c1f7229b7c787332b8bde075a23add3f3c347ce82c5f7b20a720cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

