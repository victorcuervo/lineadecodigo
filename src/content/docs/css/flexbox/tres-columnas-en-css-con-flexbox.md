---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2P2TYA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuvZdua3hoalv%2Fh67CHBJGqwrtEYmCi%2BeducgufNOJTQIhAIBw6028IX47UMpY95lNvUL7hQJpjSnDFzltMbIBFUGOKv8DCFsQABoMNjM3NDIzMTgzODA1IgxQ%2B9ZcWQ%2BM%2Fa3CyKgq3ANTx8WP%2B6XUprHejnF32VR%2B2I7Ab%2B86KRjYXzOm76MLYp96Pe5kn%2F3OFyK5sNnGXtDERr8nUn5R2U05ZgIbvvFkfjRhFs7qJkRlxvO2UhAVMRufUsqdoKXn9syXRu%2B5%2FouNvNS5M1XvSfixxmZUb1ryyt6JlT2Z3BmhmKED%2Fsyv9uEuFg3Mw4v%2BGGoPGYtZgjdflsZwc5FjB2PiYakdci%2B0UZa33K1OGNkht7DioBK7YhvPHf05BPevn4SLvxTAVRDiZmM8oS18N7fzevFMrt5sWNiXcjBKGMcPxD%2Bv1kHUEqwgIhmqdzZciSweptNUCfaPxGnK34g82yp8Jb3L6LIVi1%2FqV1nbXPFnRBDtwsRMDRwJ%2BVYwvFU49zH7VUSja1C%2B9RoVgeztkRn0yyst8ckGKaW6F7aUQAWog%2BboIrRbEg3%2BtTCc9AluQVljE60qAhxGrZPKL0J5gXtqZXQGtFLgu2AefPkFudn3rFGaj0pQiUxZZDbfgEQxKOORsUvR53CQ1CTVhr5UK%2B0PbrztIuUkTWL1f3vUJ%2BAmn8Zp03bJMYkTeOP16D63Ey0asfhP0qgKLCnlDkIjCmZ84zXcRyiLHjnWObZCcti0tTr%2FWVTyf4oC4qi3DFV0L5uY1zCpzcrJBjqkAS3QOZHNwq1vvbXGNviUF3e%2FbDK9SjaouwI7zInVfvjqrV4HopWfOPuC5UqcBO1lnJAIbCMP3OOQciSbaVdCjmTDrlGp868oslTChbxwY%2FiGXrfi%2BSS1RbVfy%2ByYjA15XI1XgNupagzpnggXwiTRwMXuUZ9Rff2xAAYTv5KMJe7EORrNx8sG%2Fp9UrTIPbSl484uU72kZqCXblUIU3fCiV7zuYHIf&X-Amz-Signature=dc064e67849e58040c2d8c113e7dad46d0a86f34f575098ef099113cc3553866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2P2TYA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuvZdua3hoalv%2Fh67CHBJGqwrtEYmCi%2BeducgufNOJTQIhAIBw6028IX47UMpY95lNvUL7hQJpjSnDFzltMbIBFUGOKv8DCFsQABoMNjM3NDIzMTgzODA1IgxQ%2B9ZcWQ%2BM%2Fa3CyKgq3ANTx8WP%2B6XUprHejnF32VR%2B2I7Ab%2B86KRjYXzOm76MLYp96Pe5kn%2F3OFyK5sNnGXtDERr8nUn5R2U05ZgIbvvFkfjRhFs7qJkRlxvO2UhAVMRufUsqdoKXn9syXRu%2B5%2FouNvNS5M1XvSfixxmZUb1ryyt6JlT2Z3BmhmKED%2Fsyv9uEuFg3Mw4v%2BGGoPGYtZgjdflsZwc5FjB2PiYakdci%2B0UZa33K1OGNkht7DioBK7YhvPHf05BPevn4SLvxTAVRDiZmM8oS18N7fzevFMrt5sWNiXcjBKGMcPxD%2Bv1kHUEqwgIhmqdzZciSweptNUCfaPxGnK34g82yp8Jb3L6LIVi1%2FqV1nbXPFnRBDtwsRMDRwJ%2BVYwvFU49zH7VUSja1C%2B9RoVgeztkRn0yyst8ckGKaW6F7aUQAWog%2BboIrRbEg3%2BtTCc9AluQVljE60qAhxGrZPKL0J5gXtqZXQGtFLgu2AefPkFudn3rFGaj0pQiUxZZDbfgEQxKOORsUvR53CQ1CTVhr5UK%2B0PbrztIuUkTWL1f3vUJ%2BAmn8Zp03bJMYkTeOP16D63Ey0asfhP0qgKLCnlDkIjCmZ84zXcRyiLHjnWObZCcti0tTr%2FWVTyf4oC4qi3DFV0L5uY1zCpzcrJBjqkAS3QOZHNwq1vvbXGNviUF3e%2FbDK9SjaouwI7zInVfvjqrV4HopWfOPuC5UqcBO1lnJAIbCMP3OOQciSbaVdCjmTDrlGp868oslTChbxwY%2FiGXrfi%2BSS1RbVfy%2ByYjA15XI1XgNupagzpnggXwiTRwMXuUZ9Rff2xAAYTv5KMJe7EORrNx8sG%2Fp9UrTIPbSl484uU72kZqCXblUIU3fCiV7zuYHIf&X-Amz-Signature=149e9aac6634c715b8bbad497b4591aaf0fa07b46540a2ff3532c35e8ccbed08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

