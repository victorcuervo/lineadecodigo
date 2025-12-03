---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQSNRXP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHPJ3mV1mEZQlX9p0rFctEPz%2BifKr2pGPDrvfttoxszLAiBdMAvxjNBw2OloG00MgDH%2F%2FvlKSb09KvUQZ4kx76g32Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7U90O7wyX6PvimbJKtwDoclP2L7H8rbohMPumI7AZoAYfvB9h76aaELp22rSr5r6eX4jQhhzeP5QJAfAKLqrgNAiDOytqglz1F3aMNuPkkFbqRuzKPenzoKFuex8spplrktSHY7I%2FIsvhGoG1uKh%2Fklpclci0y5R8WbdPbZOPpZ3VD%2B%2BNLg9Uu0VaF%2BjzTL9KANUtrrZoc2MpnoBy0chcDCPBHFFtMEQoF5vQGPMUMriIqYFJf8%2FuIRIc5vG2jC70j4T4j8JjpP4H%2FAOcxfLGLEmBsSoW5aNoDcc%2Fst3dLxi6c%2B4%2BLeInxaGjHL7ja%2BA3BIrWQFbjaJUn7vaDHksoapmFhIvnxnhTRnmt3C7h0oM8VMMmjGkTO%2F0CQVjBaJqQTo%2BV7R0NHex%2FEPLL%2B7FFQdJqyvdPdkqKKAVDmo%2FHLaymvNvK4DrDSQjSM8i0KMz%2BW2liqsuPGF3dB2kWyTJSq01wtnTDdjKTNr4YRHhIjzhMuXvnz4JM73GDCywwlEb7FSuQZ1oVYPmKa3KvmPzBjyrxwx1fmmvPsP3e%2FRpW0OvGTMnN4qdFEXySXiTLgbiftPkekrbI2VievM5MUJeWeLJKh3I6NIrIPZn%2BXz5f%2B%2BH7mlf3ztU43RjiK8CyHjDSKo%2F6GWyDPcWUJYwyJHCyQY6pgHtxMnjdQRVmtG%2FfY4umNcl%2BjBbdUxGewCshPbvjxVB3i1oYqActqxN3ILVeH0%2F8bd9g0WK2k4L85FPuHIwnWM7bywtwTByDIpIDsmjjMOguXUlM0KIIrN3EIjVe%2FDzcOLdtgwRw6A0VtuT9pZMN3CW9TmKBYWqQxUN8ffzWo%2BzQkXgUXUyansy0QXwkwadFyFbIV6%2Fb4GS4ZKZCVvAUtWq9Fn%2FjwIE&X-Amz-Signature=e2e29d3addece9e0beaf3f34dfea13bd8611896b96b31ced9cdbd3f1414f3b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQSNRXP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHPJ3mV1mEZQlX9p0rFctEPz%2BifKr2pGPDrvfttoxszLAiBdMAvxjNBw2OloG00MgDH%2F%2FvlKSb09KvUQZ4kx76g32Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7U90O7wyX6PvimbJKtwDoclP2L7H8rbohMPumI7AZoAYfvB9h76aaELp22rSr5r6eX4jQhhzeP5QJAfAKLqrgNAiDOytqglz1F3aMNuPkkFbqRuzKPenzoKFuex8spplrktSHY7I%2FIsvhGoG1uKh%2Fklpclci0y5R8WbdPbZOPpZ3VD%2B%2BNLg9Uu0VaF%2BjzTL9KANUtrrZoc2MpnoBy0chcDCPBHFFtMEQoF5vQGPMUMriIqYFJf8%2FuIRIc5vG2jC70j4T4j8JjpP4H%2FAOcxfLGLEmBsSoW5aNoDcc%2Fst3dLxi6c%2B4%2BLeInxaGjHL7ja%2BA3BIrWQFbjaJUn7vaDHksoapmFhIvnxnhTRnmt3C7h0oM8VMMmjGkTO%2F0CQVjBaJqQTo%2BV7R0NHex%2FEPLL%2B7FFQdJqyvdPdkqKKAVDmo%2FHLaymvNvK4DrDSQjSM8i0KMz%2BW2liqsuPGF3dB2kWyTJSq01wtnTDdjKTNr4YRHhIjzhMuXvnz4JM73GDCywwlEb7FSuQZ1oVYPmKa3KvmPzBjyrxwx1fmmvPsP3e%2FRpW0OvGTMnN4qdFEXySXiTLgbiftPkekrbI2VievM5MUJeWeLJKh3I6NIrIPZn%2BXz5f%2B%2BH7mlf3ztU43RjiK8CyHjDSKo%2F6GWyDPcWUJYwyJHCyQY6pgHtxMnjdQRVmtG%2FfY4umNcl%2BjBbdUxGewCshPbvjxVB3i1oYqActqxN3ILVeH0%2F8bd9g0WK2k4L85FPuHIwnWM7bywtwTByDIpIDsmjjMOguXUlM0KIIrN3EIjVe%2FDzcOLdtgwRw6A0VtuT9pZMN3CW9TmKBYWqQxUN8ffzWo%2BzQkXgUXUyansy0QXwkwadFyFbIV6%2Fb4GS4ZKZCVvAUtWq9Fn%2FjwIE&X-Amz-Signature=7a799906b95faf717e29c4c78e63ebd7d46a90062a3f8341878914a80b63ff0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

