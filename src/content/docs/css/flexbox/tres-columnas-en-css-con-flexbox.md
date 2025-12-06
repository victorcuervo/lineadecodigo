---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2DFIWH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoA4KFgaLU7Ye1GNl%2FBZ7jRiI0CWHxVcKsiUa10F0xwAiEAvS3BXymVg7BMGZV6SeiA4i33BYtqhvwm6fcN5vM4wAwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHAZ93KIMyv4cyPqXCrcA2xfiygidUlQTqXCAPi9xAW5H82%2BERyw8avjLGG18LUe2pJ6ZgDFIVNtzj%2Fd%2FUkGPXi9Lh1%2F4WEFKDpqdGOiUdOAJZ81OeKdWPKKOnsifY5alzq7U%2BrbNiVpOjslN6D9Q%2FWJC8YSQo21F%2B3NyUIEh00iuHsmxkGCUHzGayIULWvqjc6DYoQcxSCLAZH2iQmjFDO4FUs4ldMIXn9ELVBiNC4NLGkp9XmzHQWpr2Cip25TDuxFpNCDwbuqjIWKDU0SzwsPMniK%2BS3biRcIEAu6OPXPpcfTejywZ6PTcPbS4Kedsq4ScG2umR7RQiQ733vY8nogBBFDVOd1ECQfhi34LDz1itw06phW72TXThPEp43A6LtAj3b%2Bsk6uwrI6vx1lSQ%2FKZAhROv3jAgB311S8A5HmAYsGQl7homiBz2Oc%2BH4wFYQ4JmCz6RdZbhLs8KHSfNWEW%2FBOBokWdd8LARXvdXf%2BJLlRAko2cKvGj5NkIHE2A%2BgAtlPpVhR7BEVMcdoLUG%2BN78trrhVGqNl%2Fr6zz5Ha5YtYbc2x0tsfa%2Fg1TLiYq3IVuCTJ1W1g1V%2Bt5%2BORN%2BDVvyoasGvQQu7C9MbOTjuDsrngF9emtsFDCKbF7dqq2XtJDJBLYalVhVharMLGm0MkGOqUBmdV%2BuqGgqWYZJW%2B5hIQHFJLNubmrAWvLpFoAmH7J1QMcvohfHqDbcySblP9wzYteZF4K4LMOKSruzFGS621NPJNgHuSYelzAze0Xy3GoNBytz1KPw6PG7KDugi%2FsbOAFD6xTQcrzj69K1br04qXi6MeRcyrNEJKgeZKCik1Z%2FSkEml%2FK2ci6qOG0f%2FbiEz%2BFEfYO8BmydUI7Ni9Z2fkzk2mDKJ9d&X-Amz-Signature=7de1da2a92b00884c80a44e7bd3a7aa5def613ed7934f9445442cc54ccd45794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2DFIWH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoA4KFgaLU7Ye1GNl%2FBZ7jRiI0CWHxVcKsiUa10F0xwAiEAvS3BXymVg7BMGZV6SeiA4i33BYtqhvwm6fcN5vM4wAwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHAZ93KIMyv4cyPqXCrcA2xfiygidUlQTqXCAPi9xAW5H82%2BERyw8avjLGG18LUe2pJ6ZgDFIVNtzj%2Fd%2FUkGPXi9Lh1%2F4WEFKDpqdGOiUdOAJZ81OeKdWPKKOnsifY5alzq7U%2BrbNiVpOjslN6D9Q%2FWJC8YSQo21F%2B3NyUIEh00iuHsmxkGCUHzGayIULWvqjc6DYoQcxSCLAZH2iQmjFDO4FUs4ldMIXn9ELVBiNC4NLGkp9XmzHQWpr2Cip25TDuxFpNCDwbuqjIWKDU0SzwsPMniK%2BS3biRcIEAu6OPXPpcfTejywZ6PTcPbS4Kedsq4ScG2umR7RQiQ733vY8nogBBFDVOd1ECQfhi34LDz1itw06phW72TXThPEp43A6LtAj3b%2Bsk6uwrI6vx1lSQ%2FKZAhROv3jAgB311S8A5HmAYsGQl7homiBz2Oc%2BH4wFYQ4JmCz6RdZbhLs8KHSfNWEW%2FBOBokWdd8LARXvdXf%2BJLlRAko2cKvGj5NkIHE2A%2BgAtlPpVhR7BEVMcdoLUG%2BN78trrhVGqNl%2Fr6zz5Ha5YtYbc2x0tsfa%2Fg1TLiYq3IVuCTJ1W1g1V%2Bt5%2BORN%2BDVvyoasGvQQu7C9MbOTjuDsrngF9emtsFDCKbF7dqq2XtJDJBLYalVhVharMLGm0MkGOqUBmdV%2BuqGgqWYZJW%2B5hIQHFJLNubmrAWvLpFoAmH7J1QMcvohfHqDbcySblP9wzYteZF4K4LMOKSruzFGS621NPJNgHuSYelzAze0Xy3GoNBytz1KPw6PG7KDugi%2FsbOAFD6xTQcrzj69K1br04qXi6MeRcyrNEJKgeZKCik1Z%2FSkEml%2FK2ci6qOG0f%2FbiEz%2BFEfYO8BmydUI7Ni9Z2fkzk2mDKJ9d&X-Amz-Signature=6790119cb237d1001dcf9e5fbc25b8198148739e8d9f95492a3c4ceb3202bcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

