---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4TSO2M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfZ4zqIAoS%2BYkRURwCd%2FFSglyBJXBYFzcMC%2BGdJaxorAiAIs7bLsmUlmK74jz9ejTD6idQdQ2rnd%2F9C165LO11eJCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3iehmWl6ZzGsac5qKtwDeeCkP%2B5BJZHj4HY%2Fwg%2Fd3gG%2F81Scwo%2FoAzD%2BcEi7TG%2Fp6d0ZzxS9FVCJs7iOaSBZXKSe5Q2PL93ksInHFj%2BhAyKShgbiuwjIZ2mh26vb9ZoAx1OKg530y%2BWXim4mtqkb0oIQG%2FwuLEqF%2FYtpZB7FRb%2B7sQnfuLq0gP92PNT2uuog34hyJNt3ozQWd6CwNyE4l3dgZxS5GRRQZC%2F9%2BCxoIsbztXnfmjYV4LNDjFeR8nnyC134L5bsGAnZwPPV9BdBQtyTqOY30aOKoaB0nGpTnZXQp5VrTVRDdeLs59j9JwGhktmdoETD3vChCaYUhFs2fEDnRIKtOVj7o%2B4A2cvBleFV00tzGfz5YFNAWIxgFz4askw4EUvdOvKV0CnAiaqaE9v2a6QphF04rmZ7xu%2Bqa24EnqIaP59xm1xYIf4o%2FbkNz5LTuM13ryhvy9z1V6s5kNe6E2Xj3Di5GSgfyyrghDALyRLLbV%2F6%2Frg1XpuxidkcUIZe%2F1QAJCU88WOIu%2FBRAtbicx8WMIqpOsAFAJ9IGjDIjbFDz8p6vbD4uGQoHK8Ra%2B7%2BHRUSOG7SpNarBO7AKMyekSI%2BMu9oA8OXxolFI%2FhQjVLvcOTJTgywDW0n3CmLQz8YVtgbbe3zPaYwjPDLyQY6pgH1E28uKOrCRzIKOKxYuBm1BludP285YQz%2BULgJSde%2Fg8xllY%2FMGvUkSLi1lYKYEm%2F1PZ6FgkCrVD7swuhA7o2pG5G80YWL29vPhjT3ikvvSNV3Si4JNBzDe3jKgJ3lOe3%2FTV7iQ8QzqfLSxEx7bdou7MfMsvp5oRFjsnbxmaP1ppdrpAu2YK3dA7rGXR3VPwnfgk2uP6PeYOD%2F0pHBZkiQaXUXziiY&X-Amz-Signature=92122289c3b68242360aaa40199753c50a3adc7561faf6ec9511e9c04f46af2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4TSO2M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfZ4zqIAoS%2BYkRURwCd%2FFSglyBJXBYFzcMC%2BGdJaxorAiAIs7bLsmUlmK74jz9ejTD6idQdQ2rnd%2F9C165LO11eJCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM3iehmWl6ZzGsac5qKtwDeeCkP%2B5BJZHj4HY%2Fwg%2Fd3gG%2F81Scwo%2FoAzD%2BcEi7TG%2Fp6d0ZzxS9FVCJs7iOaSBZXKSe5Q2PL93ksInHFj%2BhAyKShgbiuwjIZ2mh26vb9ZoAx1OKg530y%2BWXim4mtqkb0oIQG%2FwuLEqF%2FYtpZB7FRb%2B7sQnfuLq0gP92PNT2uuog34hyJNt3ozQWd6CwNyE4l3dgZxS5GRRQZC%2F9%2BCxoIsbztXnfmjYV4LNDjFeR8nnyC134L5bsGAnZwPPV9BdBQtyTqOY30aOKoaB0nGpTnZXQp5VrTVRDdeLs59j9JwGhktmdoETD3vChCaYUhFs2fEDnRIKtOVj7o%2B4A2cvBleFV00tzGfz5YFNAWIxgFz4askw4EUvdOvKV0CnAiaqaE9v2a6QphF04rmZ7xu%2Bqa24EnqIaP59xm1xYIf4o%2FbkNz5LTuM13ryhvy9z1V6s5kNe6E2Xj3Di5GSgfyyrghDALyRLLbV%2F6%2Frg1XpuxidkcUIZe%2F1QAJCU88WOIu%2FBRAtbicx8WMIqpOsAFAJ9IGjDIjbFDz8p6vbD4uGQoHK8Ra%2B7%2BHRUSOG7SpNarBO7AKMyekSI%2BMu9oA8OXxolFI%2FhQjVLvcOTJTgywDW0n3CmLQz8YVtgbbe3zPaYwjPDLyQY6pgH1E28uKOrCRzIKOKxYuBm1BludP285YQz%2BULgJSde%2Fg8xllY%2FMGvUkSLi1lYKYEm%2F1PZ6FgkCrVD7swuhA7o2pG5G80YWL29vPhjT3ikvvSNV3Si4JNBzDe3jKgJ3lOe3%2FTV7iQ8QzqfLSxEx7bdou7MfMsvp5oRFjsnbxmaP1ppdrpAu2YK3dA7rGXR3VPwnfgk2uP6PeYOD%2F0pHBZkiQaXUXziiY&X-Amz-Signature=17b9033162a99f3a6957022ba98a57e6db1656a4259be8e739527ca3dd96843f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

