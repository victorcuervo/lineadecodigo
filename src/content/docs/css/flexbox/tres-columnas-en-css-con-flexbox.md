---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O6AXSND%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA%2FGTBw8lGlhVZwYkWvpYf8QBVT435xh3eLmQT45xPtAiAQLXZTePMNMxbVHUdY0SOx9HW9y%2FOoITDvhxQTVP4ZxCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMEjhMGgRZ2dnoElzZKtwD7eXQiyXJevjJiqFOLXIGoUKafK9c%2BCC8lRxU3HtnHFhjOLANDNV4m07xjLqnqF%2FYL8N2MFT2GZTqnfJLbzmMicsJp1zHy%2B1PVEbjXb0F8WACpP0AyNKXNY6woqJkWr0EwYkjKukL3vD8ZdvfxjQhyNXZKXIfxulcHyE0nsGAk%2B7TmJZTXhK5ceZQdrboG2Q7qJkOGTod49YcDwe9az6D0bl%2Blyo2UbM45aDRAgUTR6h9JHxmH6Ypzh9gFJOfMECNKQxRxtC4aKbG8FoLG%2BJtTOWaL%2FZqvIWCrWCEUHN0XbnDucpuftWHwIjumRYap5uLXxmQelAop5GIHh9Sadh9lsbXsgMg3uAYZUj1IZMYJN9LSmMP5e8kfbL9BPgIyspl0xND4i9vNkwpVkmMk9BuNeg5%2Fj9u0t2hdav2IbZWZCmu2021pd%2FZQLv6%2BaPlfX1k9RWrNIRIDyU25imLdh%2FTrYPIwCILk0UGEX2ugZA%2FelgsN%2FU%2BrXOkZJrRMb6W0fSj1AWBXTWT60PKksmJCUlOpg35QAXwZ6MRtQFcsfsGluIM9Ljyw3iLVvm8eGYj9DtBCtzxGh9AOvgIV%2BhPJa3MfRpP6C2t3KHRzAQo6CL71r%2BiwO7abESsKCdIIGcwu6%2FJyQY6pgH%2F8KtaOaGBMttmKzAxaL6TP0NoznXMNX%2BalHDLQR%2FzMHaGoe2z6i1xzP3ocfTvrP3JLcy78z5bktoSObnlAtIQmpqhf9SHbGQzggLc%2BrITf9x9ddGr5tsOiDWZNRVGp05vOqr3xNpc6%2F9YA3x4Ad1iJ81ltct9gKOzbPC0t56RgJjjHVIZtWyuM76jIHZwyYnIY3NDou7hbWjrPyZcqyhSFWCDrnmm&X-Amz-Signature=1b8e3aa4a215db2c1064499243ded7348de0f6e9ae1a8c07eb7bf3728acdef75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O6AXSND%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA%2FGTBw8lGlhVZwYkWvpYf8QBVT435xh3eLmQT45xPtAiAQLXZTePMNMxbVHUdY0SOx9HW9y%2FOoITDvhxQTVP4ZxCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMEjhMGgRZ2dnoElzZKtwD7eXQiyXJevjJiqFOLXIGoUKafK9c%2BCC8lRxU3HtnHFhjOLANDNV4m07xjLqnqF%2FYL8N2MFT2GZTqnfJLbzmMicsJp1zHy%2B1PVEbjXb0F8WACpP0AyNKXNY6woqJkWr0EwYkjKukL3vD8ZdvfxjQhyNXZKXIfxulcHyE0nsGAk%2B7TmJZTXhK5ceZQdrboG2Q7qJkOGTod49YcDwe9az6D0bl%2Blyo2UbM45aDRAgUTR6h9JHxmH6Ypzh9gFJOfMECNKQxRxtC4aKbG8FoLG%2BJtTOWaL%2FZqvIWCrWCEUHN0XbnDucpuftWHwIjumRYap5uLXxmQelAop5GIHh9Sadh9lsbXsgMg3uAYZUj1IZMYJN9LSmMP5e8kfbL9BPgIyspl0xND4i9vNkwpVkmMk9BuNeg5%2Fj9u0t2hdav2IbZWZCmu2021pd%2FZQLv6%2BaPlfX1k9RWrNIRIDyU25imLdh%2FTrYPIwCILk0UGEX2ugZA%2FelgsN%2FU%2BrXOkZJrRMb6W0fSj1AWBXTWT60PKksmJCUlOpg35QAXwZ6MRtQFcsfsGluIM9Ljyw3iLVvm8eGYj9DtBCtzxGh9AOvgIV%2BhPJa3MfRpP6C2t3KHRzAQo6CL71r%2BiwO7abESsKCdIIGcwu6%2FJyQY6pgH%2F8KtaOaGBMttmKzAxaL6TP0NoznXMNX%2BalHDLQR%2FzMHaGoe2z6i1xzP3ocfTvrP3JLcy78z5bktoSObnlAtIQmpqhf9SHbGQzggLc%2BrITf9x9ddGr5tsOiDWZNRVGp05vOqr3xNpc6%2F9YA3x4Ad1iJ81ltct9gKOzbPC0t56RgJjjHVIZtWyuM76jIHZwyYnIY3NDou7hbWjrPyZcqyhSFWCDrnmm&X-Amz-Signature=84727903e8bad5b732a432cfad79dc3c18e85c244394ce9102ef2da051ab152c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

