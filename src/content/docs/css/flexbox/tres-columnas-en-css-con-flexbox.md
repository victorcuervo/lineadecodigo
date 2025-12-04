---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMCT2PI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBOPtUQVmiY16c06QL8MUyaU%2B7VIK8Lg2V%2BbdTI8%2BvDcAiEA83MEEHDsWPr%2Fop4hr9oRldNwJtexzc4yMOfzrfZJ2pkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCzGh2ojVOigSXEnoCrcA37bYG0olWRhJCPivctascPJnVWN%2FLybMI%2BnHok%2BlIBZc9n9oPC7xo79REDaLYWF7wJydDezYiZf0I6QQWYGJvpMItAlxhdw%2BAeybrW7N4%2BAJTrgPp3qM2nBVDoOOc0JaDljXqtmoEFWUT3YeA6s%2Fvve0IYk%2BQToSu0RSo9NLP4mmyHwypUjHhyRITxr87eGR25UN%2FU8eu8liEV6XQkO%2F6rmJHgQo5xftIqmn7fqKBZgW6Q0fyaTwvtOiXqSL4KQjhR6yNYkXUcJWj9EnPCKsPgJq9gpZP36t%2FNr%2F92goQB69cjsBaB5dbUjLA55anUAvj4F1tkXmjfqRazYOxsDRhXVI5GfrpjyHmniBhyb9Wue6LgiCHdX%2FQN%2FthhPJTzsvIjczrtY29F1BVluufIAlSpxfHarQp7AZBdjpAGdyNUxlm2KxMbttDxpy1BofFCmBP3o4botQIGa0EATcumgoGM0Ha8fDxQvTJLs%2BtYOjj1Ux0O54HIl28PJ7FQG23%2FUUUJ3hgD%2FUvzyjEaKWmn6yVymgiq900FmMf1A%2BcFdNTIOLmCd%2F5RI0xaQEeCE9cCm3xUrqjfn6NOv2Tgo6wWQwF1Mw5yHginxXUmZgamZtTQ8VNipFAhUyrOnR3mVMPDyw8kGOqUBmk6aoqbWxlkrHFUtz6Zq%2BT5o6fgrPD1A2%2BJCQ6Pu48cIrJhy7gy3uGwe8iBE87yxsgcPiuwzBMN%2F38DVN6Pcs5IPLyCzjqrJKrf02iyEgE8DKNHCJJQtF49dg5RzK%2FEN6RDCmdLWvmUG5AVOmXjKa4Kd%2BtLfvXV5VCRra3P0pM9xwuVqkyI44NtNOblAQDSIc5dFZBEbt%2FerDwoySCIm4DNLTpKg&X-Amz-Signature=00cbdb3dbf38f83dd3e077eaa56f967ecc3a1a363f525c7f5ba9f55713e68a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMCT2PI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBOPtUQVmiY16c06QL8MUyaU%2B7VIK8Lg2V%2BbdTI8%2BvDcAiEA83MEEHDsWPr%2Fop4hr9oRldNwJtexzc4yMOfzrfZJ2pkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCzGh2ojVOigSXEnoCrcA37bYG0olWRhJCPivctascPJnVWN%2FLybMI%2BnHok%2BlIBZc9n9oPC7xo79REDaLYWF7wJydDezYiZf0I6QQWYGJvpMItAlxhdw%2BAeybrW7N4%2BAJTrgPp3qM2nBVDoOOc0JaDljXqtmoEFWUT3YeA6s%2Fvve0IYk%2BQToSu0RSo9NLP4mmyHwypUjHhyRITxr87eGR25UN%2FU8eu8liEV6XQkO%2F6rmJHgQo5xftIqmn7fqKBZgW6Q0fyaTwvtOiXqSL4KQjhR6yNYkXUcJWj9EnPCKsPgJq9gpZP36t%2FNr%2F92goQB69cjsBaB5dbUjLA55anUAvj4F1tkXmjfqRazYOxsDRhXVI5GfrpjyHmniBhyb9Wue6LgiCHdX%2FQN%2FthhPJTzsvIjczrtY29F1BVluufIAlSpxfHarQp7AZBdjpAGdyNUxlm2KxMbttDxpy1BofFCmBP3o4botQIGa0EATcumgoGM0Ha8fDxQvTJLs%2BtYOjj1Ux0O54HIl28PJ7FQG23%2FUUUJ3hgD%2FUvzyjEaKWmn6yVymgiq900FmMf1A%2BcFdNTIOLmCd%2F5RI0xaQEeCE9cCm3xUrqjfn6NOv2Tgo6wWQwF1Mw5yHginxXUmZgamZtTQ8VNipFAhUyrOnR3mVMPDyw8kGOqUBmk6aoqbWxlkrHFUtz6Zq%2BT5o6fgrPD1A2%2BJCQ6Pu48cIrJhy7gy3uGwe8iBE87yxsgcPiuwzBMN%2F38DVN6Pcs5IPLyCzjqrJKrf02iyEgE8DKNHCJJQtF49dg5RzK%2FEN6RDCmdLWvmUG5AVOmXjKa4Kd%2BtLfvXV5VCRra3P0pM9xwuVqkyI44NtNOblAQDSIc5dFZBEbt%2FerDwoySCIm4DNLTpKg&X-Amz-Signature=0aa58d9769b119236e2c563abdd0d487a0ccc630868e37dafdefc4921531c9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

