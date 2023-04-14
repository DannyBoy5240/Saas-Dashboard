import PrismCode from "../../../Components/Common/Prism";

// Scrollspy in Navbar

const navbarCode =
    `<Nav id="navbar-example" className="navbar navbar-light bg-light px-3">
<Link className="navbar-brand" to="#">
    <img src={logodark} className="card-logo card-logo-dark" alt="logo dark" height="14" />
    <img src={logolight} className="card-logo card-logo-light" alt="logo light" height="14" />
</Link>
<Scrollspy items={['fat', 'mdo', 'one', 'two', 'three']} currentClassName="active" className="nav nav-pills">
    <li className="nav-item">
        <NavLink to="#fat">@fat</NavLink>
    </li>
    <li className="nav-item">
        <NavLink to="#mdo">@mdo</NavLink>
    </li>

    <UncontrolledDropdown className="nav-item" tag="li">
        <DropdownToggle tag="button" className="btn btn-primary">
            Dropdown <i className="mdi mdi-chevron-down"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
            <DropdownItem to="#one">one</DropdownItem>
            <DropdownItem to="#two">two</DropdownItem>
            <DropdownItem divider />
            <DropdownItem to="#three">three</DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
</Scrollspy>
</Nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example"
className="scrollspy-example p-2" data-bs-offset="8">
<div className="text-muted">
    <section id="fat">
        <h5>@fat</h5>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et
            dolorum fuga.</p>
    </section>

    <section id="mdo">
        <h5>@mdo</h5>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
            aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae., sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem.</p>
    </section>

    <section id="one">
        <h5>one</h5>
        <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim
            lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights
            whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo
            booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg
            hoodie minim qui you probably haven't heard of them et cardigan trust
            fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus,
            cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
    </section>

    <section id="two">
        <h5>two</h5>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
            ad minima veniam.</p>

    </section>

    <section id="three">
        <h5>three</h5>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit</p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur autem vel
            eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum</p>
    </section>
</div>
</div>
`;

const NavbarExample = () => (
    <PrismCode
        code={navbarCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);

// Scrollspy with nested nav

const nestedNavCode =
    `<Row className="gy-4">
    <Col xxl={3}>
        <nav id="navbar-examplenested" className="navbar navbar-light bg-light flex-column">
            <Link className="navbar-brand mb-2" to="#">
                <img src={logodark} className="card-logo card-logo-dark" alt="logo dark" height="15" />
                <img src={logolight} className="card-logo card-logo-light" alt="logo light" height="15" />
            </Link>

            <Scrollspy items={['item-1', 'item-2', 'item-3']} currentClassName="active" className="nav nav-pills flex-column p-3 w-100">
                <NavLink to="#item-1"><i className="ri-dashboard-2-line align-middle me-2 fs-16"></i> <span>Dashboards</span></NavLink>
                <Scrollspy items={['item-1-1', 'item-1-2']} currentClassName="active" className="nav nav-pills flex-column">
                    <NavLink to="#item-1-1"><i className="ri-subtract-fill align-middle me-2 fs-15"></i> <span>Ecommerce</span></NavLink>
                    <NavLink to="#item-1-2"><i className="ri-subtract-fill align-middle me-2 fs-15"></i> <span>Analytics</span></NavLink>
                </Scrollspy>
                <NavLink to="#item-2"><i className="ri-pencil-ruler-2-line align-middle me-2 fs-16"></i> <span>Base UI</span></NavLink>
                <NavLink to="#item-3"><i className="ri-apps-2-line align-middle me-2 fs-16"></i> <span>Apps</span></NavLink>
                <Scrollspy items={['item-3-1', 'item-3-2']} currentClassName="active" className="nav nav-pills flex-column">
                    <NavLink to="#item-3-1"><i className="ri-subtract-fill align-middle me-2 fs-15"></i> <span>Chat</span></NavLink>
                    <NavLink to="#item-3-2"><i className="ri-subtract-fill align-middle me-2 fs-15"></i> <span>Email</span></NavLink>
                </Scrollspy>
            </Scrollspy>
        </nav>
    </Col>

    <Col xxl={9}>
        <div data-bs-spy="scroll" data-bs-target="#navbar-examplenested" data-bs-offset="0"
            className="scrollspy-example-2">
            <div className="text-muted">
                <section id="item-1">
                    <h5>Item 1</h5>
                    <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat
                        ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco
                        cillum consectetur ut et aute consectetur labore. Fugiat laborum
                        incididunt tempor eu consequat enim dolore proident. Qui laborum do
                        non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua
                        officia quis et incididunt voluptate non anim reprehenderit
                        adipisicing dolore ut consequat deserunt mollit dolore. Aliquip
                        nulla enim veniam non fugiat id cupidatat nulla elit cupidatat
                        commodo velit ut eiusmod cupidatat elit dolore.</p>
                </section>
                <section id="item-1-1">
                    <h5>Item 1-1</h5>
                    <p>Amet tempor mollit aliquip pariatur excepteur commodo do ea cillum
                        commodo Lorem et occaecat elit qui et. Aliquip labore ex ex esse
                        voluptate occaecat Lorem ullamco deserunt. Aliqua cillum excepteur
                        irure consequat id quis ea. Sit proident ullamco aute magna pariatur
                        nostrud labore. Reprehenderit aliqua commodo eiusmod aliquip est do
                        duis amet proident magna consectetur consequat eu commodo fugiat non
                        quis. Enim aliquip exercitation ullamco adipisicing voluptate
                        excepteur minim exercitation minim minim commodo adipisicing
                        exercitation officia nisi adipisicing. Anim id duis qui consequat
                        labore adipisicing sint dolor elit cillum anim et fugiat.</p>
                </section>
                <section id="item-1-2">
                    <h5>Item 1-2</h5>
                    <p>Cillum nisi deserunt magna eiusmod qui eiusmod velit voluptate
                        pariatur laborum sunt enim. Irure laboris mollit consequat
                        incididunt sint et culpa culpa incididunt adipisicing magna magna
                        occaecat. Nulla ipsum cillum eiusmod sint elit excepteur ea labore
                        enim consectetur in labore anim. Proident ullamco ipsum esse elit ut
                        Lorem eiusmod dolor et eiusmod. Anim occaecat nulla in non consequat
                        eiusmod velit incididunt.</p>
                </section>
                <section id="item-2">
                    <h5>Item 2</h5>
                    <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
                        nulla tempor. Laborum consequat non elit enim exercitation cillum
                        aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est
                        in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit
                        elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit
                        aliqua esse irure. Laborum nisi sit est tempor laborum mollit labore
                        officia laborum excepteur commodo non commodo dolor excepteur
                        commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt
                        in proident.</p>
                </section>
                <section id="item-3">
                    <h5>Item 3</h5>
                    <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit
                        culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat
                        excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor
                        mollit elit ex pariatur dolore velit fugiat mollit culpa irure
                        ullamco est ex ullamco excepteur.</p>
                </section>
                <section id="item-3-1">
                    <h5>Item 3-1</h5>
                    <p>Deserunt quis elit Lorem eiusmod amet enim enim amet minim Lorem
                        proident nostrud. Ea id dolore anim exercitation aute fugiat labore
                        voluptate cillum do laboris labore. Ex velit exercitation nisi enim
                        labore reprehenderit labore nostrud ut ut. Esse officia sunt duis
                        aliquip ullamco tempor eiusmod deserunt irure nostrud irure. Ullamco
                        proident veniam laboris ea consectetur magna sunt ex exercitation
                        aliquip minim enim culpa occaecat exercitation. Est tempor excepteur
                        aliquip laborum consequat do deserunt laborum esse eiusmod irure
                        proident ipsum esse qui.</p>
                </section>
                <section id="item-3-2">
                    <h5>Item 3-2</h5>
                    <p>Labore sit culpa commodo elit adipisicing sit aliquip elit proident
                        voluptate minim mollit nostrud aute reprehenderit do. Mollit
                        excepteur eu Lorem ipsum anim commodo sint labore Lorem in
                        exercitation velit incididunt. Occaecat consectetur nisi in occaecat
                        proident minim enim sunt reprehenderit exercitation cupidatat et do
                        officia. Aliquip consequat ad labore labore mollit ut amet. Sit
                        pariatur tempor proident in veniam culpa aliqua excepteur elit magna
                        fugiat eiusmod amet officia.</p>
                </section>
            </div>
        </div>
    </Col>
</Row>
`;

const NestedNavExample = () => (
    <PrismCode
        code={nestedNavCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);


// Scrollspy with list-group

const listgroupCode =
`<Row className="gy-4">
    <Col xxl={3}>
        <Scrollspy items={['list-item-1', 'list-item-2', 'list-item-3', 'list-item-4']} currentClassName="active" className="list-group">
            <Link className="list-group-item list-group-item-action" to="#list-item-1">Item 1</Link>
            <Link className="list-group-item list-group-item-action" to="#list-item-2">Item 2</Link>
            <Link className="list-group-item list-group-item-action" to="#list-item-3">Item 3</Link>
            <Link className="list-group-item list-group-item-action" to="#list-item-4">Item 4</Link>
        </Scrollspy>

    </Col>
    <Col xxl={9}>
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example mt-0">
            <div className="text-muted">
                <section id="list-item-1">
                    <h5>Item 1</h5>
                    <p>Ex consequat commodo adipisicing exercitation aute excepteur occaecat ullamco duis aliqua id magna ullamco eu. Do aute ipsum ipsum ullamco cillum consectetur ut et aute consectetur labore. Fugiat laborum incididunt tempor eu consequat enim dolore proident. Qui laborum do non excepteur nulla magna eiusmod consectetur in. Aliqua et aliqua officia quis et incididunt voluptate non anim reprehenderit adipisicing dolore ut consequat deserunt mollit dolore. Aliquip nulla enim veniam non fugiat id cupidatat nulla elit cupidatat commodo velit ut eiusmod cupidatat elit dolore.</p>
                </section>
                <section id="list-item-2">
                    <h5>Item 2</h5>
                    <p>Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum nisi sit est tempor laborum mollit labore officia laborum excepteur commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur ipsum commodo tempor sunt in proident.</p>
                </section>
                <section id="list-item-3">
                    <h5>Item 3</h5>
                    <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
                </section>
                <section id="list-item-4">
                    <h5>Item 4</h5>
                    <p>Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
                </section>
            </div>
        </div>
    </Col>
</Row>
`;

const ListgroupExample = () => (
    <PrismCode
        code={listgroupCode}
        language={("js", "css", "html")}
        plugins={["line-numbers"]}
    />
);

export { NavbarExample, NestedNavExample, ListgroupExample };