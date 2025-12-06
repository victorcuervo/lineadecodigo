---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377W43VK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGDCleF85npGf19plKVOnvl8O3Arpr7kF%2FiUyHP5jjgAiEAkvI2AHHm2ZL8X1k6k472k28tRXyhmjX5B8XyuxqGLKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGrHV%2FS6x5I86GlCwyrcA1QiGKFy0jMo5hnWkDKHpVXwz7oQsvQe%2BmVwXQAw4IlZKYnw8%2Bci2NG6XoHNhJ6RSxBOOlZI0zNNzGY5fCu6Ba%2B5Kwyww3IBCzus8ev4pw%2BrG2oxf%2B88pIEB%2FkDKHybnseJeCzJs6EPnvikQPBZPkMPvgfFfk5MGVxwir%2FxrxF1GbJY2z9XYmWAqs80gge89Y1sPqPwhhbdJBynka5neOIZKZYmzVqwfx5BzjWG17U393rPzvx%2BaZTbEUWGLozFa%2BminAhbRCCyVYtuFFUtYHJFHDrkllcdm2ruhldTqblzkpsg3485hvFeH6iYcKAi79PYeFvPO2%2FPl0qEU9KBiTnv6F1QPhpBWg61CXVdF1tlJbRcpxrR5IAiSQCuLR%2BbV7oHWzJ7%2FGMc8amZd7ZZm7hiK5yVPb1JzxX4s91QVk8E0UcWGz4MnCsW8JhoWTRnnY5IDvs85X8ATVyWHuUDkip1EuMk%2ByStMqvE2%2FwZ1ZYdW%2FIRXqjdJaPfTmdp3Ft%2FnFbAzfrj1cj%2Fp4i3h4tSTiHtPrxJ%2BuWtw8ncrDonnjD6KTjySJG%2BDRJSri98QO5stn7MSMWOHY%2BZvCNPTai63EsCBMSCRJk%2FNvRpgY75BNhYyKZCg%2F%2BASgTYrIPO5MOKm0MkGOqUBq4yoob5Ka7yThs%2Bw97PvCTmloPd%2B%2BpJ5E%2FqGxnDltnf3YWxoirP%2Bhmsu4mMYeJYsdB9wRaSICqnF%2BOjeLwLlA7UIN59rpc29HV%2BASqub3Fqarczzc24xYK9Kyt18pz6I9cfR2WvlwCO%2FpAqhrmMxCyr0jpMzbSBpk3t1pWR%2FZNDODLe%2FgBNlbLXqAond0umINxeKoOiv2olV03B8CngcTCUToqXq&X-Amz-Signature=aaf2ac15406285041bcc55cfefa669eb0350a619d17eec63a55a4c91c598bc27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377W43VK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGDCleF85npGf19plKVOnvl8O3Arpr7kF%2FiUyHP5jjgAiEAkvI2AHHm2ZL8X1k6k472k28tRXyhmjX5B8XyuxqGLKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGrHV%2FS6x5I86GlCwyrcA1QiGKFy0jMo5hnWkDKHpVXwz7oQsvQe%2BmVwXQAw4IlZKYnw8%2Bci2NG6XoHNhJ6RSxBOOlZI0zNNzGY5fCu6Ba%2B5Kwyww3IBCzus8ev4pw%2BrG2oxf%2B88pIEB%2FkDKHybnseJeCzJs6EPnvikQPBZPkMPvgfFfk5MGVxwir%2FxrxF1GbJY2z9XYmWAqs80gge89Y1sPqPwhhbdJBynka5neOIZKZYmzVqwfx5BzjWG17U393rPzvx%2BaZTbEUWGLozFa%2BminAhbRCCyVYtuFFUtYHJFHDrkllcdm2ruhldTqblzkpsg3485hvFeH6iYcKAi79PYeFvPO2%2FPl0qEU9KBiTnv6F1QPhpBWg61CXVdF1tlJbRcpxrR5IAiSQCuLR%2BbV7oHWzJ7%2FGMc8amZd7ZZm7hiK5yVPb1JzxX4s91QVk8E0UcWGz4MnCsW8JhoWTRnnY5IDvs85X8ATVyWHuUDkip1EuMk%2ByStMqvE2%2FwZ1ZYdW%2FIRXqjdJaPfTmdp3Ft%2FnFbAzfrj1cj%2Fp4i3h4tSTiHtPrxJ%2BuWtw8ncrDonnjD6KTjySJG%2BDRJSri98QO5stn7MSMWOHY%2BZvCNPTai63EsCBMSCRJk%2FNvRpgY75BNhYyKZCg%2F%2BASgTYrIPO5MOKm0MkGOqUBq4yoob5Ka7yThs%2Bw97PvCTmloPd%2B%2BpJ5E%2FqGxnDltnf3YWxoirP%2Bhmsu4mMYeJYsdB9wRaSICqnF%2BOjeLwLlA7UIN59rpc29HV%2BASqub3Fqarczzc24xYK9Kyt18pz6I9cfR2WvlwCO%2FpAqhrmMxCyr0jpMzbSBpk3t1pWR%2FZNDODLe%2FgBNlbLXqAond0umINxeKoOiv2olV03B8CngcTCUToqXq&X-Amz-Signature=a5a559fb580cfdc570b6bbc6f2faeb0d02b644e1ba40db0868c15ac7c67afb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

