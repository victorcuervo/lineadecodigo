---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXKZNEY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbVLm0GJ4UyU5xOy8vv6jxEEaoQcCNop7QUwBx4ozLlAiA2l689K9zacskIpHT1AAPFFwbHpdXRhq0zBEFG6X9%2BJSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMiwYMJK9TLrcV3soLKtwDbeb14OoKbKv8B8ofu5Gm76o37YsW%2F5BPr847eylKS0%2BoTWdkZnN6m6uVuFeJ1Lf14HLoivHxRpSSh3imQ%2BdxOBqCal0%2B%2FC36AC%2BSQeN7OQB9Lph3YJTp7xygbemRUcvXZfPO53uaP0NsjDF%2FJqux0mchlCDKkcnLiOHj%2FoHdSjoBh%2BWCCT8RuQcGrorxPpoz9V33za2WFHtEkKocg3%2FDf3QoLf%2BFmZdDIMBrim4VwA%2FPJi03Nh6AvWqJtRDQxKLLgnoRzPVQrctdjURrKUdUROPmB3lnPaxs%2FbNBgguN3unD281IHzfa6WHBQdP9PW0%2F3JBO124cnHptrux0tMFnKUfxfosIiCegoo2wFt%2BOlr0SgaYCgbgHg4a9Pv7gpCVG3e6YkG2hPg1Lh8yeZ0k2yOyrUk1TAFHtN6Ey7eeV3pJW470eLoyFfHhXIwQJkdZyAwHubkKrVpWP%2BgTQwJAt5Yekr9iuN07oM7klzPs7d6ok9vJoG%2F9kNMFOItqJTx1v9isxmpk7ckauAbvVAow%2F9f6KPe%2FGCZdcweAkK6JQqtOX%2BuCz8PkcA3Ugj31MTpdI5Vl3TILaC34UKGSC277YqPXDPFgc9l6qIG0yhmaJfTvBdx1bfiHeEwSnLngwk6jOyQY6pgESZVir7dHcc2sR1P0aQujP7zuhcudROHZt%2FkvdnmLUCoasYKm%2BYVkWExEf%2FV9G2wLYUVasO39UiSpvpWzHDmS3%2BPiokj%2B7H0eZXJcaCdulBJeewPqSCr8nW40B3X3vTiwY7ZBTcM%2B4kMndtq%2FwqotxgpQ554kvGCMXPJNwVWWuwB6jVjfMuyREeleKhSe2mqeLbOxf%2BC0TdEA623H0cf2jK6UY5RTx&X-Amz-Signature=41b639eaba454347c7c0a48a96537d025995f854cd85fb61bc16592aa4d2e030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXKZNEY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbVLm0GJ4UyU5xOy8vv6jxEEaoQcCNop7QUwBx4ozLlAiA2l689K9zacskIpHT1AAPFFwbHpdXRhq0zBEFG6X9%2BJSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMiwYMJK9TLrcV3soLKtwDbeb14OoKbKv8B8ofu5Gm76o37YsW%2F5BPr847eylKS0%2BoTWdkZnN6m6uVuFeJ1Lf14HLoivHxRpSSh3imQ%2BdxOBqCal0%2B%2FC36AC%2BSQeN7OQB9Lph3YJTp7xygbemRUcvXZfPO53uaP0NsjDF%2FJqux0mchlCDKkcnLiOHj%2FoHdSjoBh%2BWCCT8RuQcGrorxPpoz9V33za2WFHtEkKocg3%2FDf3QoLf%2BFmZdDIMBrim4VwA%2FPJi03Nh6AvWqJtRDQxKLLgnoRzPVQrctdjURrKUdUROPmB3lnPaxs%2FbNBgguN3unD281IHzfa6WHBQdP9PW0%2F3JBO124cnHptrux0tMFnKUfxfosIiCegoo2wFt%2BOlr0SgaYCgbgHg4a9Pv7gpCVG3e6YkG2hPg1Lh8yeZ0k2yOyrUk1TAFHtN6Ey7eeV3pJW470eLoyFfHhXIwQJkdZyAwHubkKrVpWP%2BgTQwJAt5Yekr9iuN07oM7klzPs7d6ok9vJoG%2F9kNMFOItqJTx1v9isxmpk7ckauAbvVAow%2F9f6KPe%2FGCZdcweAkK6JQqtOX%2BuCz8PkcA3Ugj31MTpdI5Vl3TILaC34UKGSC277YqPXDPFgc9l6qIG0yhmaJfTvBdx1bfiHeEwSnLngwk6jOyQY6pgESZVir7dHcc2sR1P0aQujP7zuhcudROHZt%2FkvdnmLUCoasYKm%2BYVkWExEf%2FV9G2wLYUVasO39UiSpvpWzHDmS3%2BPiokj%2B7H0eZXJcaCdulBJeewPqSCr8nW40B3X3vTiwY7ZBTcM%2B4kMndtq%2FwqotxgpQ554kvGCMXPJNwVWWuwB6jVjfMuyREeleKhSe2mqeLbOxf%2BC0TdEA623H0cf2jK6UY5RTx&X-Amz-Signature=75c848ad1517568945e8a0ba20204fbe41bc6e0cb1dda847e0173145898cdd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

