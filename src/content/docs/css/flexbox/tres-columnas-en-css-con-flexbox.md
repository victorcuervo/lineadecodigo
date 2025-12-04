---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5SZH6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDnQaMSASpjIeumRjiMIcoWZ6%2Br2axxqL0ZxsCprCPU4gIgfRVJW2tMo1cskJ5wXeH2O2PC%2F8eSxdOIQuFy114kAHMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCiS%2Baw4ynvs%2FV8TyircA3dLhkbBGXVEpnsFRc6Hr%2BUR0vGR%2BqxKV%2BXfO3k7TFwiyefjeDsRWLQwnV0%2FITyagZmROTzKaPI%2F91juuvEpbxkLYiVZLHTGmxdwHsS5hWyTjrIWMWzjrohP8K%2B3DeoRSED52lAtqnqGwCNcmeOwrR9nDobRbGe1IR3Wu%2Bpz24kZH3ayDv%2FscYWFMPJtO9GNKSpe7jGaT7dZ69VW4NSdN9K%2FRmHPtRAisNMhjrnSZcJY%2BPBNY6LcmDOMx6uKDc4zk3QuK%2F9fNHqBKlJYcud6pwY5dNHNAz%2B9xDOKe0KJLNygdpU9eBiCDu5JvoD%2FaBuI7GIB18epp5JYKn99B%2FwDF9UdEvqBasyrIDmnVNdXD9awvedHUcebH5JaVCJBNAPYIbYmmoIAq02M8S%2FzBA8mF0Q17VZHA24FxCtTgX3E2Lh1sP0X%2BsOVpy10EDeLEBs8oweIWdma3fyIZgHUfupf%2Bqq%2B7OLApw1uFm7JDfwrSxmM4sVzXf3jWOoax3sym6DZsmy5OwvP4wuAxSuqH5pdpaxbnm%2FLoFVfpiMC3xQ7z3YH%2FJihWzRJkuuW3txyMqQyPgRZDVydRxOId9JnZHGiMzcyYGB%2FA9S6X3WXCs8GCpi965ENn7O%2F11TsRCthMIyrxckGOqUBHDy5olsS0rV4nRmukHesZrXgReM5%2BSmf5LCtSqfpt599Xp9uBiZNzH3h5QADRoF4%2FwGZ94ObD%2F7l1ApFZJ1Dr9CkIf4UWL7vvSuPzbYxw%2ByfYNodndKRy4o%2BnID3bRnX2w61zN0XV%2Bdl2ThqN%2FMrmQmO9TI0NDJYc86ov2xFl50x9cWD4oXe73LTs9UaOrGFFAKbYN9V3MaoT0oXwkqAMK7cW8jt&X-Amz-Signature=f8317c0dcb3937b4251cec7b27a474b0a6d21662945b14bfb2fee44ccb2d00db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZN5SZH6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDnQaMSASpjIeumRjiMIcoWZ6%2Br2axxqL0ZxsCprCPU4gIgfRVJW2tMo1cskJ5wXeH2O2PC%2F8eSxdOIQuFy114kAHMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCiS%2Baw4ynvs%2FV8TyircA3dLhkbBGXVEpnsFRc6Hr%2BUR0vGR%2BqxKV%2BXfO3k7TFwiyefjeDsRWLQwnV0%2FITyagZmROTzKaPI%2F91juuvEpbxkLYiVZLHTGmxdwHsS5hWyTjrIWMWzjrohP8K%2B3DeoRSED52lAtqnqGwCNcmeOwrR9nDobRbGe1IR3Wu%2Bpz24kZH3ayDv%2FscYWFMPJtO9GNKSpe7jGaT7dZ69VW4NSdN9K%2FRmHPtRAisNMhjrnSZcJY%2BPBNY6LcmDOMx6uKDc4zk3QuK%2F9fNHqBKlJYcud6pwY5dNHNAz%2B9xDOKe0KJLNygdpU9eBiCDu5JvoD%2FaBuI7GIB18epp5JYKn99B%2FwDF9UdEvqBasyrIDmnVNdXD9awvedHUcebH5JaVCJBNAPYIbYmmoIAq02M8S%2FzBA8mF0Q17VZHA24FxCtTgX3E2Lh1sP0X%2BsOVpy10EDeLEBs8oweIWdma3fyIZgHUfupf%2Bqq%2B7OLApw1uFm7JDfwrSxmM4sVzXf3jWOoax3sym6DZsmy5OwvP4wuAxSuqH5pdpaxbnm%2FLoFVfpiMC3xQ7z3YH%2FJihWzRJkuuW3txyMqQyPgRZDVydRxOId9JnZHGiMzcyYGB%2FA9S6X3WXCs8GCpi965ENn7O%2F11TsRCthMIyrxckGOqUBHDy5olsS0rV4nRmukHesZrXgReM5%2BSmf5LCtSqfpt599Xp9uBiZNzH3h5QADRoF4%2FwGZ94ObD%2F7l1ApFZJ1Dr9CkIf4UWL7vvSuPzbYxw%2ByfYNodndKRy4o%2BnID3bRnX2w61zN0XV%2Bdl2ThqN%2FMrmQmO9TI0NDJYc86ov2xFl50x9cWD4oXe73LTs9UaOrGFFAKbYN9V3MaoT0oXwkqAMK7cW8jt&X-Amz-Signature=8b615b87e5af6373ce97e55065ae10a011b0a776d964ad5bd21f772a3a3544e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

