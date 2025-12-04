---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OJND2F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCqpbYDEfFdNt0%2BcwkMHkpJWUmY6Rc0IhcnC4hqxErCjwIhAPlF611aHtN6jG6LWnE7rfOEQfLQE1M2NPrnbQnFn6KdKv8DCEEQABoMNjM3NDIzMTgzODA1Igyi4jiUbVKM8nZUeFAq3APxsh6hTJvSN6HVL7w1f9cU7vVzkalTuQRhyh2qh1%2B1qSWEhNwSHWtoz97Hht7jBbNE3LS1GHf1fj7TYlL62mlNMFYw7Iy9vesvcvxHOmKx%2Bz%2FWxddi3mEeJvS8zD9dJ%2B%2BaRX%2BU7dWHp3VVSXiswED%2BrFDl9TTowyl%2FKWM6ZGURskYaJ92X3opn7NzrVszS5CKktR8M1ifwB6JFNqzwy5AayruNepFe2nVqfh5ls9cL7SL4wn1oLCu%2F%2B21MJ98nHKRBEXQUl8mz4ffkRUoiKFILG3KRqxiouxH3qfHHQ4SjQj5wkk4Q1mPCbxGqfovwvuQS3so0fDpTEaC7fJjGA4BbWGAw2QGhmSDaDYQaEV74ptu%2BmJ9OWEZ879h6AY%2FNpB6fSaP%2BMFE915SO2XKEQDLqr4H4RoP2GQnPT6JUAwVH44n3DP5CnAJ0K%2BSxtv1LCuADReCBasvMWu6WG5JsaBgOHFxxr9UZSBlOKRe%2Bj9OaNqOh2OY829lsTswoNwd2SXwBCHNmodOL1f9uhBBifA0O%2FQSZH5QONBVv2oGP%2BeH9FF%2FvOrKXqPZ1GBZxfHjOIMROiIqy6QmFNv1iShd6U6ir5BHsXvEaPvofjA%2B8P0TTxZNak6uVT5jRgzJRnTC6hcXJBjqkAfTX3VnxAMLnjUorlw9wRIrHigTn0vwDWBTOd%2BPjJfumlENKAMSLF1VX%2FSmq1Hzy9vR3VzLB8oAXSFO0IjRQsmcxUmDDM0ECryujoqChiSL%2Fk%2BHB8DHJCYZPj9bNoSmqH1mCfupjIgCJyMfJJp6tqtYXUadWgaZRltbznyzET5nSF3z0H6C%2Bq%2FN4A48ukHxWHLICPYq7sdlsaer%2BzprYhLMBWJt1&X-Amz-Signature=55e83cbbad36156d4d9ca1a3be43f29b5459c8a915f70afb4653d5dc022a840a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OJND2F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCqpbYDEfFdNt0%2BcwkMHkpJWUmY6Rc0IhcnC4hqxErCjwIhAPlF611aHtN6jG6LWnE7rfOEQfLQE1M2NPrnbQnFn6KdKv8DCEEQABoMNjM3NDIzMTgzODA1Igyi4jiUbVKM8nZUeFAq3APxsh6hTJvSN6HVL7w1f9cU7vVzkalTuQRhyh2qh1%2B1qSWEhNwSHWtoz97Hht7jBbNE3LS1GHf1fj7TYlL62mlNMFYw7Iy9vesvcvxHOmKx%2Bz%2FWxddi3mEeJvS8zD9dJ%2B%2BaRX%2BU7dWHp3VVSXiswED%2BrFDl9TTowyl%2FKWM6ZGURskYaJ92X3opn7NzrVszS5CKktR8M1ifwB6JFNqzwy5AayruNepFe2nVqfh5ls9cL7SL4wn1oLCu%2F%2B21MJ98nHKRBEXQUl8mz4ffkRUoiKFILG3KRqxiouxH3qfHHQ4SjQj5wkk4Q1mPCbxGqfovwvuQS3so0fDpTEaC7fJjGA4BbWGAw2QGhmSDaDYQaEV74ptu%2BmJ9OWEZ879h6AY%2FNpB6fSaP%2BMFE915SO2XKEQDLqr4H4RoP2GQnPT6JUAwVH44n3DP5CnAJ0K%2BSxtv1LCuADReCBasvMWu6WG5JsaBgOHFxxr9UZSBlOKRe%2Bj9OaNqOh2OY829lsTswoNwd2SXwBCHNmodOL1f9uhBBifA0O%2FQSZH5QONBVv2oGP%2BeH9FF%2FvOrKXqPZ1GBZxfHjOIMROiIqy6QmFNv1iShd6U6ir5BHsXvEaPvofjA%2B8P0TTxZNak6uVT5jRgzJRnTC6hcXJBjqkAfTX3VnxAMLnjUorlw9wRIrHigTn0vwDWBTOd%2BPjJfumlENKAMSLF1VX%2FSmq1Hzy9vR3VzLB8oAXSFO0IjRQsmcxUmDDM0ECryujoqChiSL%2Fk%2BHB8DHJCYZPj9bNoSmqH1mCfupjIgCJyMfJJp6tqtYXUadWgaZRltbznyzET5nSF3z0H6C%2Bq%2FN4A48ukHxWHLICPYq7sdlsaer%2BzprYhLMBWJt1&X-Amz-Signature=c4e374831b6670f004a6dfff1936949e42ab6a0492bcd0e04ca28c02b459fb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

