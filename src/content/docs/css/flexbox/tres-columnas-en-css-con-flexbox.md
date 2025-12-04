---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3O5KV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAHufeBEvp7j5P5spVsg93RArK1PeoT2pUoSR333JuuvAiEAhR5ir75WBwVOmPtTiCKYTVGyum6lkAcU53%2BjHV%2BYF5wq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD%2BBkNLPGWBbEfPJHCrcA%2FxVZXhjqmrMYoWQbsi0CG2mPylJlJh87VeTayzBKoFEK4rV%2BLYXJUP9is8L66QoiJhtIaGlnUoWqp0Q0R%2BaNpvwXC8nWwuDIE6E0jYcDdhsKFd8x6rgXXa04Si%2Bvlx4uzIQZ55UN9%2F2oHYjaPrrYEoAa4Dt0NrRQuqa5uPJf1CAiR9xliG65NgGHWubMR%2BeWaFInBad8ksnJkmrNXvr7uyz%2BbcFwHEK0iu%2BzaOvl8NUB4FEs5upuavXAcmPpa3Kz3MoC9frP9rRClgEdjnZf%2Fz2WwpJ%2BU1oeYRZuwdxyM4%2B%2FanLD%2BXFIuI9K4A112KzLe2V2Ur4%2BHaSMxAlQJtkxMItvsTROkTeeFlgqE0CEVT2kLD7wXzj%2FJHO7RLqr5wgODsU4SDI69YBGlawXlgaHceTiSSBZ6%2F6V8GNwt1uQ0dOh7pszTY2G2DhxHkdPttcdF7XR3Q2zm2TigwcDL52cVQKnWBFoDjusX8teoWx6PxOoiKQ09K%2FjSzcwvQXDwrEoTrrvl5YGSnFLBK2rshTyqykT31wkxmv9LxrxkrHKJxN1SODak0tMWNZYRFxKoohT26kgqy6aPjTzW3HkF%2Blxx3bVj7TQ7C2CjuoBzOxeRdIcN%2FaK5qXrO%2Fc1u1bMOS0w8kGOqUBaC6V%2BvOpGUbruo8eQsN9TqEb3Mj5%2BpMgDPWavSlydqxXV2UxITGBVtfGjh3hbYtc0znkuntRpl%2FKtqhDzX64Qd%2B3%2Bg00VkWu7an7MIeC0ma2q9nN3i7M5IohcFyuneewD5ivxNC5rLDqz6IShCmn3d6POFocsIB5VL3i09T35Ur1CCnIKXx8ZFEgHiZz0cdEzm41k0oafkw4PrAmQRJEES0hoR%2BM&X-Amz-Signature=a5dc0dcb941a6cdb3f01eb5ea247482457f117383b01fecdcfb055b5fbb204e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3O5KV5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAHufeBEvp7j5P5spVsg93RArK1PeoT2pUoSR333JuuvAiEAhR5ir75WBwVOmPtTiCKYTVGyum6lkAcU53%2BjHV%2BYF5wq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDD%2BBkNLPGWBbEfPJHCrcA%2FxVZXhjqmrMYoWQbsi0CG2mPylJlJh87VeTayzBKoFEK4rV%2BLYXJUP9is8L66QoiJhtIaGlnUoWqp0Q0R%2BaNpvwXC8nWwuDIE6E0jYcDdhsKFd8x6rgXXa04Si%2Bvlx4uzIQZ55UN9%2F2oHYjaPrrYEoAa4Dt0NrRQuqa5uPJf1CAiR9xliG65NgGHWubMR%2BeWaFInBad8ksnJkmrNXvr7uyz%2BbcFwHEK0iu%2BzaOvl8NUB4FEs5upuavXAcmPpa3Kz3MoC9frP9rRClgEdjnZf%2Fz2WwpJ%2BU1oeYRZuwdxyM4%2B%2FanLD%2BXFIuI9K4A112KzLe2V2Ur4%2BHaSMxAlQJtkxMItvsTROkTeeFlgqE0CEVT2kLD7wXzj%2FJHO7RLqr5wgODsU4SDI69YBGlawXlgaHceTiSSBZ6%2F6V8GNwt1uQ0dOh7pszTY2G2DhxHkdPttcdF7XR3Q2zm2TigwcDL52cVQKnWBFoDjusX8teoWx6PxOoiKQ09K%2FjSzcwvQXDwrEoTrrvl5YGSnFLBK2rshTyqykT31wkxmv9LxrxkrHKJxN1SODak0tMWNZYRFxKoohT26kgqy6aPjTzW3HkF%2Blxx3bVj7TQ7C2CjuoBzOxeRdIcN%2FaK5qXrO%2Fc1u1bMOS0w8kGOqUBaC6V%2BvOpGUbruo8eQsN9TqEb3Mj5%2BpMgDPWavSlydqxXV2UxITGBVtfGjh3hbYtc0znkuntRpl%2FKtqhDzX64Qd%2B3%2Bg00VkWu7an7MIeC0ma2q9nN3i7M5IohcFyuneewD5ivxNC5rLDqz6IShCmn3d6POFocsIB5VL3i09T35Ur1CCnIKXx8ZFEgHiZz0cdEzm41k0oafkw4PrAmQRJEES0hoR%2BM&X-Amz-Signature=33529ab44c459711406f74c3381f8f9504c024fd4168cb95cada738f02cf314e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

