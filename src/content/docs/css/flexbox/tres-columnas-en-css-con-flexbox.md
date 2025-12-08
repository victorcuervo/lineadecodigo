---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S27BDGJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICavTvYZeJtUrpdFBhEFdAT0h6Qaf3Yj3lZyNi%2FY%2B%2BytAiAyy3Kwsm1TAM%2F9bTOa%2BO7%2FMkmozAePeVGa1VSTbms6bSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekt7VmDgsc4N66a8KtwDCmp0xqfb5xVj6ydDKNBSfqhX3Ypk7qioua91qxQI9Jt9XNc4pgll%2FjEf9allQZvMcp4NDL%2F8n%2Bkf0WU8gXCh7%2FQ5J3r%2FJgMNS4EHU%2BfqoO8%2FrYyZQYkclK8suc0eXLzqTCqPo614dNkmGAP7chnXjEmFSO%2BlERYIIheCD4jIdMF1gtHxnchdUYrTsCH8JLuc3jCBo9fZPi8eTD8HhDejQySC6qE57kTczJk6ztuM1%2Bmf3%2F5ImGfxk3%2BIIC8x7L3ydOUa6uJJcMYIxTeSM48BkvdIkkJM3RwAdobd2k%2FcU4im7SmU%2BtPgRmdCaZlRKnLdYoTEAS2AcFV5lfUJLRqBjnqY7jSZy9T0fvWuUE9PR7V%2FQ3Ibyf1zrANLIbFz9R29d3FQZ9cVE9gcMJYmson8sE7rS8qnRM%2BHRsjX%2Fgc5jTRmuVW6KDVfExYk%2F%2BkRrBKusiDqEVA5pBt6aE7xcnCwPsvobjQKS%2FEeM8vGZjKWSB2j1E2ScSlNpLFuEi5NcdkD5WGBbcNRsAabCeHVMolwMCbL2QUTtL%2FplyKnDgWtyWxef6DOKcy3k7yxqAQAz%2B17hktLRvOOMXwMVZRFXAOHTy1vUWBcBc9RSxktTY6IIWd1ihzdUYUQS5MK%2FVQwnuTbyQY6pgGtVIpr5p8QhUf3cLCC%2FUdvrhhNx9FNJmUxlsCLhEy1R6cMvlNcGoPAs%2BWYAQRy0M8WJ%2FXqVdK%2Bmn%2BKHmuv5JmT%2FgTL6T5ajwtLkWTBsCVwoIzpbx78wFPeWtbO9Y7VhkJ%2FHYmYO%2Fwc77opoMMp9NGYT9rUHUjyZzRAtW08Nsnkm%2FzB1jcp81ZiSPwQq%2BGLpUN%2BikOZ9CHPvYnLsFp0JCgKHSeepV90&X-Amz-Signature=25fd99a6f422ca56641e6fa0654f32c2443a627ea0a0c6a19b9c74b0540450e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S27BDGJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICavTvYZeJtUrpdFBhEFdAT0h6Qaf3Yj3lZyNi%2FY%2B%2BytAiAyy3Kwsm1TAM%2F9bTOa%2BO7%2FMkmozAePeVGa1VSTbms6bSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekt7VmDgsc4N66a8KtwDCmp0xqfb5xVj6ydDKNBSfqhX3Ypk7qioua91qxQI9Jt9XNc4pgll%2FjEf9allQZvMcp4NDL%2F8n%2Bkf0WU8gXCh7%2FQ5J3r%2FJgMNS4EHU%2BfqoO8%2FrYyZQYkclK8suc0eXLzqTCqPo614dNkmGAP7chnXjEmFSO%2BlERYIIheCD4jIdMF1gtHxnchdUYrTsCH8JLuc3jCBo9fZPi8eTD8HhDejQySC6qE57kTczJk6ztuM1%2Bmf3%2F5ImGfxk3%2BIIC8x7L3ydOUa6uJJcMYIxTeSM48BkvdIkkJM3RwAdobd2k%2FcU4im7SmU%2BtPgRmdCaZlRKnLdYoTEAS2AcFV5lfUJLRqBjnqY7jSZy9T0fvWuUE9PR7V%2FQ3Ibyf1zrANLIbFz9R29d3FQZ9cVE9gcMJYmson8sE7rS8qnRM%2BHRsjX%2Fgc5jTRmuVW6KDVfExYk%2F%2BkRrBKusiDqEVA5pBt6aE7xcnCwPsvobjQKS%2FEeM8vGZjKWSB2j1E2ScSlNpLFuEi5NcdkD5WGBbcNRsAabCeHVMolwMCbL2QUTtL%2FplyKnDgWtyWxef6DOKcy3k7yxqAQAz%2B17hktLRvOOMXwMVZRFXAOHTy1vUWBcBc9RSxktTY6IIWd1ihzdUYUQS5MK%2FVQwnuTbyQY6pgGtVIpr5p8QhUf3cLCC%2FUdvrhhNx9FNJmUxlsCLhEy1R6cMvlNcGoPAs%2BWYAQRy0M8WJ%2FXqVdK%2Bmn%2BKHmuv5JmT%2FgTL6T5ajwtLkWTBsCVwoIzpbx78wFPeWtbO9Y7VhkJ%2FHYmYO%2Fwc77opoMMp9NGYT9rUHUjyZzRAtW08Nsnkm%2FzB1jcp81ZiSPwQq%2BGLpUN%2BikOZ9CHPvYnLsFp0JCgKHSeepV90&X-Amz-Signature=89b7b4f73a58b8b4f1f1a2f0f355152baf24bfc2a0a28e25ba747ac2087f5b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

