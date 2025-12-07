---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUM42ZO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgWr8V%2Bd7fnsMe8EeUMJJSutdwjYdgBifkxJgZkjpuYgIgQreI%2Fjgqa%2BjSVzlLtGCqRxWYYE8uA08x6n9t%2F%2BSVSAIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAHlDyKXsnTPYOpYSrcA2U2Uzsi9mFUPydEu7Iw3d9%2BApzdFwrvQZWwnQ68mDdxv5yrkHoyO1W1TGey4xzbCOE6qaVbg6lVPDrRnqxKVYf6Z2yFe4oDG9BYxraetk26EB7Nbe1dPSxCG3WLMNngWfCn453YEbwkchC1kewPMXRZGo1cTDuoLb%2FBulVcnBJEBfpaoArcDEch%2BbkS0aDeYDetM8XebPCk2%2BcZnAgYwBypNbV27HY0WILOaOb1jabZynMC6Z0E6l84OE8%2BissQmem0vnlxbh8Bf5KnXOticHhmc9us0LUPL54E%2B6o3kv%2F6aABFoYJVKK5jnto2PPdZtKlg%2BVUfn3rKzjXD0PR%2Fj9LBAI%2Brw3BWs0MfNYcdGfQZ%2BMkIj4q%2FxrzQeyI8NCXjn2WUNDeBMpBhr0a0fMQhPMdBjjdVhtO53bemV1IjRkk0C8uliPRb3HsTPwy95njD11%2F2G3BN0evKb%2FoGQ%2F07DoXLHaKKM6cnyrRsROTv0%2FXjbPrSebc33sCs%2BcwX4vIKlSE8pNRyETltDtwk3L3%2FcNRrtW5CVtRKhL5bHdnoIDptIWq5mcqWZcSSQOF%2FUKPXefVbbfxpmz%2B0aWbhFvQWGFzgQYvk4eZqH3%2Fhj8xsokVSU%2BsuJWBcR2DwzqCgMMbH18kGOqUBiJ%2FELAtib%2F6TM7KSTZJHC6v6HSjp%2BpTL3Q73ulklf%2BQmSOT2f3OAe1EtEjXX%2FswW0rfZX%2B9o8Tr3XRl0iphUP0G71F055y6Lp57eML2ofccQlFRp3adTpZ0Wsuc%2BfQLE%2FwEHG%2F7ymbhG4uVwzWQeyCcerOj4t649iQ53iE%2FjHf63zoNOHCXaIMxCfCEBnSMlLHRHyVQ4ZzP3Ob%2F%2FFG%2BzWK5K9gJP&X-Amz-Signature=44cfb51dc2af03c46690f7e274aa04fc49c8842e88174e218dde533e99c68f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUM42ZO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgWr8V%2Bd7fnsMe8EeUMJJSutdwjYdgBifkxJgZkjpuYgIgQreI%2Fjgqa%2BjSVzlLtGCqRxWYYE8uA08x6n9t%2F%2BSVSAIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAHlDyKXsnTPYOpYSrcA2U2Uzsi9mFUPydEu7Iw3d9%2BApzdFwrvQZWwnQ68mDdxv5yrkHoyO1W1TGey4xzbCOE6qaVbg6lVPDrRnqxKVYf6Z2yFe4oDG9BYxraetk26EB7Nbe1dPSxCG3WLMNngWfCn453YEbwkchC1kewPMXRZGo1cTDuoLb%2FBulVcnBJEBfpaoArcDEch%2BbkS0aDeYDetM8XebPCk2%2BcZnAgYwBypNbV27HY0WILOaOb1jabZynMC6Z0E6l84OE8%2BissQmem0vnlxbh8Bf5KnXOticHhmc9us0LUPL54E%2B6o3kv%2F6aABFoYJVKK5jnto2PPdZtKlg%2BVUfn3rKzjXD0PR%2Fj9LBAI%2Brw3BWs0MfNYcdGfQZ%2BMkIj4q%2FxrzQeyI8NCXjn2WUNDeBMpBhr0a0fMQhPMdBjjdVhtO53bemV1IjRkk0C8uliPRb3HsTPwy95njD11%2F2G3BN0evKb%2FoGQ%2F07DoXLHaKKM6cnyrRsROTv0%2FXjbPrSebc33sCs%2BcwX4vIKlSE8pNRyETltDtwk3L3%2FcNRrtW5CVtRKhL5bHdnoIDptIWq5mcqWZcSSQOF%2FUKPXefVbbfxpmz%2B0aWbhFvQWGFzgQYvk4eZqH3%2Fhj8xsokVSU%2BsuJWBcR2DwzqCgMMbH18kGOqUBiJ%2FELAtib%2F6TM7KSTZJHC6v6HSjp%2BpTL3Q73ulklf%2BQmSOT2f3OAe1EtEjXX%2FswW0rfZX%2B9o8Tr3XRl0iphUP0G71F055y6Lp57eML2ofccQlFRp3adTpZ0Wsuc%2BfQLE%2FwEHG%2F7ymbhG4uVwzWQeyCcerOj4t649iQ53iE%2FjHf63zoNOHCXaIMxCfCEBnSMlLHRHyVQ4ZzP3Ob%2F%2FFG%2BzWK5K9gJP&X-Amz-Signature=6fbec600a0a68d50bb7fe16141637b9a0b2cbf6b241f53f6f47f8da28799bfbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

