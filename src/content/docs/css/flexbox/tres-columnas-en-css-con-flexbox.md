---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZOAFTR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXHsjYa29%2B8uQmvK4Vd%2BbIbffuTdqvaIpDNSJe9%2FRe1AIgBY%2FszVUP5Rfoy8cGuSsnsJOuXiXwVJ9O9Q6%2Bn25OAKUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLpSnZi5ME4s7wutPircA%2BURuTJr6mcH9djCijE8nsz7L4S%2FxfWh13Gydt3gXLVYq%2Ff%2BLk5FjEJ5X0ealKOAW7PuIFf%2BLBQ%2FLZ1GhAvxgZ22lYq2bG%2F9cyhHqKTEcJmx9Pio4CZLg97DLGvJ7116dNZ%2BZlQRwWf43YETIfYXZ2LHSuzfCwZywLHwdNvJ5bQU8cu%2FJxnKIOQzUkLT85%2FaVzv3renl8SczPyWBMfKOUC%2F53lHOI%2FH8dQCFD6VjpncjtuHny3PJTXm4XxMUONoWvD%2Fg7dqmzWOLcuHybpB4b%2BcIkszpNE5%2BNAxl5qUsXsJZgIMSVyrIwHLLU%2B2hgqSR%2By5W%2B2yHEOfQNMHiVIxBBV%2BBLvtCZXO0CzSzqRuZz77LUUGI1BnRwnazaHeMCMMFyAHKOPnHh0nuTQu0Ru1F9rsrfx44h0q2oNWum1jJ2Eh6xNYVmck8hp3LwJg0SKLJISDC1Rr26nXQYYUzs57GjnT%2FQZdJP17hrWP2mDyD1ZREFS0V7W7ul%2FW3WHwPPL6FQ63jIgq0GjEi%2BP2uckHf6Qi7GIpLvanrwI7Ou8voMedqAu8EDxj77%2Bo6SHZeRbAgiVv9EvxP4eGTHPZDiOQcAMi3rd5M%2BKjTgVmEcxNv6rklP0mq16lapf1a%2FtHLMITVw8kGOqUBVSbvtMb3A5F8Wi74N8CvfK4pQv4v4SyF2WMRPMdSBxNGsJ6yEXAgkuYsr059M2KUJSX0%2FP0GKlrQUlTlQFBs8RpaVBmQMKvZ2P6nkK2oWj6h5qzePZVpfHMvnkKhFXP6j5SVvdSXCSo%2BGp%2Bl6Nxdv2L8k%2BFDl8m%2Bg9IT3dYtIX%2BVZYc67YKwRcH2qE7FelFw8uSCTaeZXilPUMVok1Mzpp8EOlOa&X-Amz-Signature=db31a5477bd4b59d6bf1a2c39451a3d837a308d5ca58ce1f71d4ca6ed52ff3ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZOAFTR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXHsjYa29%2B8uQmvK4Vd%2BbIbffuTdqvaIpDNSJe9%2FRe1AIgBY%2FszVUP5Rfoy8cGuSsnsJOuXiXwVJ9O9Q6%2Bn25OAKUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLpSnZi5ME4s7wutPircA%2BURuTJr6mcH9djCijE8nsz7L4S%2FxfWh13Gydt3gXLVYq%2Ff%2BLk5FjEJ5X0ealKOAW7PuIFf%2BLBQ%2FLZ1GhAvxgZ22lYq2bG%2F9cyhHqKTEcJmx9Pio4CZLg97DLGvJ7116dNZ%2BZlQRwWf43YETIfYXZ2LHSuzfCwZywLHwdNvJ5bQU8cu%2FJxnKIOQzUkLT85%2FaVzv3renl8SczPyWBMfKOUC%2F53lHOI%2FH8dQCFD6VjpncjtuHny3PJTXm4XxMUONoWvD%2Fg7dqmzWOLcuHybpB4b%2BcIkszpNE5%2BNAxl5qUsXsJZgIMSVyrIwHLLU%2B2hgqSR%2By5W%2B2yHEOfQNMHiVIxBBV%2BBLvtCZXO0CzSzqRuZz77LUUGI1BnRwnazaHeMCMMFyAHKOPnHh0nuTQu0Ru1F9rsrfx44h0q2oNWum1jJ2Eh6xNYVmck8hp3LwJg0SKLJISDC1Rr26nXQYYUzs57GjnT%2FQZdJP17hrWP2mDyD1ZREFS0V7W7ul%2FW3WHwPPL6FQ63jIgq0GjEi%2BP2uckHf6Qi7GIpLvanrwI7Ou8voMedqAu8EDxj77%2Bo6SHZeRbAgiVv9EvxP4eGTHPZDiOQcAMi3rd5M%2BKjTgVmEcxNv6rklP0mq16lapf1a%2FtHLMITVw8kGOqUBVSbvtMb3A5F8Wi74N8CvfK4pQv4v4SyF2WMRPMdSBxNGsJ6yEXAgkuYsr059M2KUJSX0%2FP0GKlrQUlTlQFBs8RpaVBmQMKvZ2P6nkK2oWj6h5qzePZVpfHMvnkKhFXP6j5SVvdSXCSo%2BGp%2Bl6Nxdv2L8k%2BFDl8m%2Bg9IT3dYtIX%2BVZYc67YKwRcH2qE7FelFw8uSCTaeZXilPUMVok1Mzpp8EOlOa&X-Amz-Signature=6500823ac88a3748ccebf16dbc34a78d3a398170be02ca1fbb0987fdc260ae53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

