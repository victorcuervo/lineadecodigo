---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZGJCCE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiWWZy0ZgRbVNXBAj162NpKL4AgRnYLwtGSsqvauLLDgIgFxCPK14OiapKTAafnEDR8gA11ywOD%2FPS2kNAD292eUsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AiaRRmag5NybuvCrcA6g8UK38li1qSajLavGC0GMnXSJFPq3oXXs3dVy44QaJwc%2F6zy5OmCkPXKs5x8QxeuEhwIUMosmvM51wXaZRw4SPX9OU9%2B1i6eBcvkiovsZUf16uP6OWSlMarCNt7lVQjDNiFP0xCh6O%2FInJXFZcn8Bvcnd63%2BiQ2OqRgQuRr3nm4hZpk9VmTHxRcvReIbAUeFThfX9AUB5SDP4MSPbildpFNJ%2FjeRNi85KQ4FNw19Lasb%2F68tpWI%2Bv2RJ8WWzCIb7FJpGhByINoRe9hDPmvvR7w0w0nq7hrxgyGHv6rZlcNlVPKrvrA%2FGRHEBQ%2FOuDS2I2q2wyvuMcVmPMbHl5nj9ql58Aqci6M4JcjMrhOaYQvD8PJaWvc%2B3DUg%2FlI4VCOtLKME5wGhdNYFPO4S92%2F5mJrxeP7P2WSZJ05yKvlhOqQh8%2B9kPWzl5slkLAAngjMQZeYrN5VEyCiRUzNt5XUALJxEIzGb2%2BEl39TX%2BHhdPGe5AlGsHYt9RLXUzyyzop%2Fn2anvCXA%2B1G%2BemksME%2Fwstxh8xUalQdb9RAKUBqb3n%2BBwAtSqSzKwng%2BeDVglh%2F2vG%2FOM8DAwTeu6%2Fp0Rflcj8wbC08TjL%2BTmuW3jgQyWgUnL%2FVhUHUdo2%2FvXkE%2FMMDE38kGOqUBBc0jS9fZgSRp1sXQD0%2Bfos1MX04ff0UGaE510TmrTNPabQCOR%2Bj%2FPuCbTWULTGlx8lO%2BkDvKO2gGRK8hm7JMmU57wQWiCyVnmXXFjgkANjgzkhMcVRTkbFIPZD2AWYek1bbHxkrq0Y8rjf42UGB29jOhnG9h6e0X%2FEnawZCZpVjw1LwszNt7FHmf%2BDP4hLdorGRmogP6tZvhuIiXilbbzO4fMrOE&X-Amz-Signature=7de3d05381bd1cd807a36269fd7efad338c8b2191a15b76123522e017e3a91c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZGJCCE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiWWZy0ZgRbVNXBAj162NpKL4AgRnYLwtGSsqvauLLDgIgFxCPK14OiapKTAafnEDR8gA11ywOD%2FPS2kNAD292eUsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3AiaRRmag5NybuvCrcA6g8UK38li1qSajLavGC0GMnXSJFPq3oXXs3dVy44QaJwc%2F6zy5OmCkPXKs5x8QxeuEhwIUMosmvM51wXaZRw4SPX9OU9%2B1i6eBcvkiovsZUf16uP6OWSlMarCNt7lVQjDNiFP0xCh6O%2FInJXFZcn8Bvcnd63%2BiQ2OqRgQuRr3nm4hZpk9VmTHxRcvReIbAUeFThfX9AUB5SDP4MSPbildpFNJ%2FjeRNi85KQ4FNw19Lasb%2F68tpWI%2Bv2RJ8WWzCIb7FJpGhByINoRe9hDPmvvR7w0w0nq7hrxgyGHv6rZlcNlVPKrvrA%2FGRHEBQ%2FOuDS2I2q2wyvuMcVmPMbHl5nj9ql58Aqci6M4JcjMrhOaYQvD8PJaWvc%2B3DUg%2FlI4VCOtLKME5wGhdNYFPO4S92%2F5mJrxeP7P2WSZJ05yKvlhOqQh8%2B9kPWzl5slkLAAngjMQZeYrN5VEyCiRUzNt5XUALJxEIzGb2%2BEl39TX%2BHhdPGe5AlGsHYt9RLXUzyyzop%2Fn2anvCXA%2B1G%2BemksME%2Fwstxh8xUalQdb9RAKUBqb3n%2BBwAtSqSzKwng%2BeDVglh%2F2vG%2FOM8DAwTeu6%2Fp0Rflcj8wbC08TjL%2BTmuW3jgQyWgUnL%2FVhUHUdo2%2FvXkE%2FMMDE38kGOqUBBc0jS9fZgSRp1sXQD0%2Bfos1MX04ff0UGaE510TmrTNPabQCOR%2Bj%2FPuCbTWULTGlx8lO%2BkDvKO2gGRK8hm7JMmU57wQWiCyVnmXXFjgkANjgzkhMcVRTkbFIPZD2AWYek1bbHxkrq0Y8rjf42UGB29jOhnG9h6e0X%2FEnawZCZpVjw1LwszNt7FHmf%2BDP4hLdorGRmogP6tZvhuIiXilbbzO4fMrOE&X-Amz-Signature=6ddd1d3893c3c6dc456404984efa8fa71db9b281b9edee2ac48b7f891bba9739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

